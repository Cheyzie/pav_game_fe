import { Navigate, useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { useEffect, useState } from "react";
import { cleanUser, getMe } from "~/redux/user";
import type { Route } from "../../../+types/root";
import { signOut } from "~/redux/token";
import { TextField } from "~/routes/auth/components/text_input";
import { createRoom, joinRoom, setRoomCode } from "~/redux/room";
import CodeInput from "./code_input/code_input";
import { FormContainer, Logo } from "~/components/styles";
import { SubmitButton } from "~/routes/auth/components/styles";
import { CreateRoomButtonContainer, Header, Line, Outer, SectionBreak, SignOutButton, SignOutContainer } from "./styles";
import { CreatePromptButton } from "./create_pompt_button/create_prompt_button";
import { LangSelector } from "./lang_selector/lang_selector";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcom to game" },
  ];
}


const posiblePromptLangs = ['ua', 'en'];


export default function Home() {
    const user = useAppSelector(state => state.user);
    const token = useAppSelector(state => state.token);
    const dispatcher = useAppDispatch();
    const location = useLocation();
    const nav = useNavigate();
    const [lang, setLang] = useState<string>("")
    const [code, setCode] = useState<string>("");
    const [nickname, setNickname] = useState<string>("")
    const room = useAppSelector( state => state.room)
    useEffect(() => {
        if (!user.user)
            dispatcher(getMe());
        setNickname(user.user?.username ?? nickname)
    },[user.user]);

    useEffect(() => {
        if(!token.refreshToken) {
            nav('/signin')
        }
    }, [token.refreshToken])

    useEffect(() => {
        if (room.room.code != "") {
            setCode(room.room.code)
        }
    }, [room.room.code])

    useEffect(() => {
        if (room.room.code != "") {
            dispatcher(setRoomCode(code));
        }
    }, [code])

    useEffect(() => {
        if (room.token != null) {
            nav('/room')
        }
    }, [room.token])

    if (!user.loading && !user.user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    async function logout() {
        await dispatcher(signOut())
        dispatcher(cleanUser());

    }
    function create() {
        dispatcher(createRoom())
    }
    function join() {
        dispatcher(joinRoom({code: code, nickname: nickname}))
    }
    return (user.user && 
    <>
        <Header>
            <Logo>pav</Logo>
            <SignOutContainer>
                {user.user.username}
                {user.loading ? "loading..." : <SignOutButton onClick={logout}>log out</SignOutButton>}
            </SignOutContainer>
        </Header>
        <Outer>
            <FormContainer>
                <CreateRoomButtonContainer>
                    <LangSelector selected={lang} langs={posiblePromptLangs} onChange={setLang}/>
                    {room.loading ? "loading..." : <SubmitButton $disabled={false} onClick={create}>CREATE ROOM</SubmitButton>}
                </CreateRoomButtonContainer>
                <SectionBreak><Line/><div>OR</div><Line/></SectionBreak>
                <CodeInput id="code" value={code} placeholder="Enter code" onCodeChange={(v: string)=>setCode(v)}/>
                <TextField id="nick" value={nickname} placeholder="nickname in the room" onChange={(e: any)=>setNickname(e.target.value)}/>
                {(room.error) && <p>error:{room.error}</p>}
                {room.loading ? "loading..." : <SubmitButton $disabled={code.length < 4 || nickname.length === 0} onClick={() => { code.length === 4 && nickname.length > 0 && join()}}>JOIN</SubmitButton>}
                <CreatePromptButton yourPromptsCount={12} onClick={() => nav('create-prompt')} />
            </FormContainer>
        </Outer>
    </>)
}