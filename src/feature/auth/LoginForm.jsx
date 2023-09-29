import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import { useAuth } from "../../hooks/use-auth";

export default function LoginForm() {
    const [input, setInput] = useState({
        emailOrMobile: '',
        password: ''
    });

    const { login } = useAuth(); //{login : login} จาก use-auth.js

    const handdleSubmitForm = e => {
        e.preventDefault();
        login(input);
    };

    return (
        <form className="grid gap-4" onSubmit={handdleSubmitForm}>

            <LoginInput
                placeholder="Email address or phone number"
                value={input.emailOrMobile}
                onchange={e => setInput({ ...input, emailOrMobile: e.target.value })}
            />

            <LoginInput
                type="password"
                placeholder="password"
                value={input.password}
                onchange={e => setInput({ ...input, password: e.target.value })}
            />

            <LoginButton />


        </form>
    );
}