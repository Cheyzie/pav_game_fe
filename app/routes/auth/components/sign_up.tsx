import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { PasswordField } from "./password_input";
import { TextField } from "./text_input";
import { NavLink, useNavigate } from "react-router";
import type { Route } from "./+types/sign_up";
import { Description, LinkContainer, Outer, Phrase, SubmitButton } from "./styles";
import { FormContainer, Logo } from "~/components/styles";
import axiosInstance from "~/utils/axios";
import { ErrorContainer } from "./error_container/error_container";
import { extractError } from "~/routes/room/utils/extrat_error";

export function meta({}: Route.ActionArgs) {
  return [
    { title: "SignUp" },
    { name: "description", content: "Sign up page" },
  ];
}

export default function SignUp() {
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const user = useAppSelector(state => state.user)
    const nav = useNavigate()
    async function submit() {
        try {
            const res = await axiosInstance.post(
                "/api/v1/signup", 
                { email: email, username: username, password: password}
            );
            if (res.status >= 200 && res.status < 300) {
                nav('/signin');
            }
        } catch (error: any) {
            return setError(extractError(error).message);
        }
    }

    return (<Outer>
        <FormContainer>
            <Logo>pav</Logo>
            <Phrase>lie to your friends</Phrase>
            <Description>Eight rounds. Guess the real answer, or fool everyone with yours.</Description>
            
            <TextField id="email" placeholder="Email" value={email} onChange={(e: any)=>setEmail(e.target.value)}/>
            <TextField id="email" placeholder="Username" value={username} onChange={(e: any)=>setUsername(e.target.value)}/>
            <PasswordField 
                id="password" 
                value={password} 
                placeholder="Password"
                onChange={(e: any) => setPassword(e.target.value)}
            />
            {error && <ErrorContainer content={error}/>}
            {user.loading ? "loading..." : <SubmitButton $disabled={email.length === 0 || password.length === 0 && username.length === 0} onClick={() => {email.length > 0 && password.length > 0 && username.length > 0 && submit()}}>SIGN UP</SubmitButton>}
            <LinkContainer>Already have an account? <NavLink to={'/signin'} style={{color: 'var(--accent)', textDecoration: 'none', fontWeight: 600}}> Sign in</NavLink></LinkContainer>
        </FormContainer>
    </Outer>)
}