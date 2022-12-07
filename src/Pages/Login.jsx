import React, {useState} from 'react';


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        if(email === 'sunitvarada@yahoo.com' && password === 'qwerty'){
            window.location.href = "http://localhost:3000/dashboard";
        }
    };    return (
        <div>Login</div>
    )
}

export default Login