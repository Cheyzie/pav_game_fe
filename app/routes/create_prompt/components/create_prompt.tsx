import { useState } from "react";
import type { Route } from "../../../+types/root";
import { AnswerInput, ButtonBlock, ButtonDescription, FormContainer, Header, HeaderItem, InputContainer, InputDescriptionContainer, InputDescriptionItem, InputsContainer, InputTitle, QuestionInput, SelectsContainer, SideContainer, SubmitButton, Subtitle, Title, Wrapper } from "./styles";
import { LangSelector } from "./lang_selector/lang_selector";
import { PackSelector } from "./pack_selector/pack_selector";
import { useNavigate } from "react-router";


const posiblePromptLangs = ['ua', 'en'];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Create prompt" },
    { name: "description", content: "Create your own prompt" },
  ];
}

export default function CreatePrompt() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [lang, setLang] = useState("ua");
    const nav = useNavigate();

    const back = () => {
        nav('/')
    };

    return (<Wrapper>
        <Header>
            <HeaderItem style={{cursor: "pointer"}} onClick={back}>Back</HeaderItem>
            <HeaderItem>12 of your prompts</HeaderItem>
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
                    <PackSelector packs={[{name: "animals", count: 11},{name: "cars", count: 32},{name: "history", count: 7},{name: "rude", count: 69},{name: "road", count: 80},]}/>
                </SelectsContainer>
                <ButtonBlock>
                    <SubmitButton>ADD PROMPT</SubmitButton>
                    <ButtonDescription>goes into the shared pool</ButtonDescription>
                </ButtonBlock>
            </SideContainer>
        </FormContainer>
    </Wrapper>);
}