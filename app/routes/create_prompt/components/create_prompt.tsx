import { useEffect, useState } from "react";
import type { Route } from "../../../+types/root";
import { AnswerInput, ButtonBlock, ButtonDescription, FormContainer, Header, HeaderItem, InputContainer, InputDescriptionContainer, InputDescriptionItem, InputsContainer, InputTitle, QuestionInput, SelectsContainer, SideContainer, SubmitButton, Subtitle, Title, Wrapper } from "./styles";
import { LangSelector } from "./lang_selector/lang_selector";
import { PackSelector } from "./pack_selector/pack_selector";
import { useNavigate } from "react-router";
import { getCategories, setWrittenIn } from "~/redux/categories";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { getPromptsCount } from "~/redux/prompts_count";
import { createPrompt } from "~/api_requests/create_prompt";
import { toast } from "react-toastify";
import { InfoToast } from "~/components/info_toast/info_toast";
import { ErrorToast } from "~/components/error_toast/error_toast";
import type { Category } from "~/types/category";


const posiblePromptLangs = ['ua', 'en'];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Create prompt" },
    { name: "description", content: "Create your own prompt" },
  ];
}

export default function CreatePrompt() {
    const categories = useAppSelector(state => state.categories);
    const promptsCount = useAppSelector(state => state.promptsCount);
    const token = useAppSelector(state => state.token);
    const [question, setQuestion] = useState("");
    const [category, setCategory] = useState<Category| null>(null);
    const [answer, setAnswer] = useState("");
    const [lang, setLang] = useState(categories.written_in ? categories.written_in : "ua");
    const nav = useNavigate();
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(setWrittenIn(lang));
        setCategory(null);
        dispatch(getCategories());
    }, [lang])

    useEffect(() => {
        dispatch(getPromptsCount())
    }, [])

    const back = () => {
        nav('/')
    };

    const handleCreatePrompt = async () => {
        if (!token.accessToken || !question || !answer || !category || !lang) {
            return
        }
        const prompt = {question: question, truth: answer, category: category.category, written_in: lang};
        const res = await createPrompt(token.accessToken, prompt);
        if (res.status >= 200 && res.status < 300) {
            toast(InfoToast, {
                autoClose: 5000,
                data: {
                    type: "prompt created",
                    message: "Prompt created and added into the shared pool."
                }
            })
            setAnswer("");
            setQuestion("");
            setCategory(null);
            dispatch(getPromptsCount());
        } else {
            toast(ErrorToast, {
                autoClose: 5000,
                data: {
                    error: res.data.message,
                }
            })
        }
    };

    return (<Wrapper>
        <Header>
            <HeaderItem style={{cursor: "pointer"}} onClick={back}>Back</HeaderItem>
            <HeaderItem>{promptsCount.count} of your prompts</HeaderItem>
        </Header>
        <FormContainer>
            <InputsContainer>
                <Title>write a prompt</Title>
                <Subtitle>Good prompts have one true answer that sounds made up. Anyone's game can draw it.</Subtitle>
                <InputContainer>
                    <InputTitle $warn={true}>The question</InputTitle>
                    <QuestionInput rows={3} value={question} onChange={(e) => setQuestion(e.target.value.slice(0, 200))} />
                    <InputDescriptionContainer>
                        <InputDescriptionItem $warn={false}>ends with a question mark</InputDescriptionItem>
                        <InputDescriptionItem $warn={question.length >= 200}>{question.length} / 200</InputDescriptionItem>
                    </InputDescriptionContainer>
                </InputContainer>
                <InputContainer>
                    <InputTitle $warn={false}>The real answer</InputTitle>
                    <AnswerInput type="text" value={answer} onChange={(e) => setAnswer(e.target.value.slice(0, 120))} />
                    <InputDescriptionContainer>
                        <InputDescriptionItem $warn={false}>short answers are harder to guess</InputDescriptionItem>
                        <InputDescriptionItem $warn={answer.length >= 120}>{answer.length} / 120</InputDescriptionItem>
                    </InputDescriptionContainer>
                </InputContainer>
            </InputsContainer>
            <SideContainer>
                <SelectsContainer>
                    <LangSelector selected={lang} langs={posiblePromptLangs} onChange={setLang}/>
                    <PackSelector packs={categories.categories} selected={category} onChange={setCategory}/>
                </SelectsContainer>
                <ButtonBlock>
                    <SubmitButton onClick={handleCreatePrompt}>ADD PROMPT</SubmitButton>
                    <ButtonDescription>goes into the shared pool</ButtonDescription>
                </ButtonBlock>
            </SideContainer>
        </FormContainer>
    </Wrapper>);
}