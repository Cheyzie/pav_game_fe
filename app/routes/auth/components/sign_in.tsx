import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { PasswordField } from "./password_input";
import { TextField } from "./text_input";
import type { Route } from "./+types/sign_in";
import { getMe } from "~/redux/user";
import { NavLink, useNavigate } from "react-router";
import { login, refreshTokens } from "~/redux/token";
import { Description, LinkContainer, Outer, Phrase, SubmitButton } from "./styles";
import { FormContainer, Logo } from "~/components/styles";
import { ErrorContainer } from "./error_container/error_container";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SignIn" },
    { name: "description", content: "Sign in page" },
  ];
}

export default function SignIn() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const token = useAppSelector(state => state.token)
    const nav = useNavigate()
    async function submit() {
        dispatch(login({email: email, password:password}))
        
    }
    useEffect(() => {
        if(token.accessToken) {
            dispatch(getMe())
        }
    }, [token.accessToken])
    useEffect(() => {
        if(token.refreshToken) {
            nav('/')
        }
    }, [token.refreshToken])

    return (<Outer>
        <FormContainer>
            <Logo>pav</Logo>
            <Phrase>lie to your friends</Phrase>
            <Description>Eight rounds. Guess the real answer, or fool everyone with yours.</Description>
            
            <TextField id="email" placeholder="Email" value={email} onChange={(e: any)=>setEmail(e.target.value)}/>
            <PasswordField 
                id="password" 
                value={password} 
                placeholder="Password"
                onChange={(e: any) => setPassword(e.target.value)}
            />
            {token.error && <ErrorContainer content={token.error}/>}
            {token.loading ? "loading..." : <SubmitButton $disabled={email.length === 0 || password.length === 0} onClick={() => {email.length > 0 && password.length > 0 && submit()}}>SIGN IN</SubmitButton>}
            <LinkContainer>No account? <NavLink to={'/signup'} style={{color: 'var(--accent)', textDecoration: 'none', fontWeight: 600}}> Sign up</NavLink></LinkContainer>
        </FormContainer>
    </Outer>)
}