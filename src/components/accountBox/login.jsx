import React, { useContext } from "react";
import { useState } from 'react';
import { BoxContainer,
    FormContainer,
    Input,
    AltPrompt,
    ColorLink,
    SubmitButton} from "./common";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { switchToSignup } = useContext(AccountContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = "/lessons";
    }

    return (<BoxContainer>
        <FormContainer>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </FormContainer>
        <AltPrompt href="#">Forgot password?</AltPrompt>
        <SubmitButton onClick={handleSubmit} type="submit">Login</SubmitButton>
        <AltPrompt href="#">Don't have an account?<ColorLink onClick={switchToSignup}>Sign up!</ColorLink></AltPrompt>
    </BoxContainer>);
}