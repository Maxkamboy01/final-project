import React from 'react'
import { useState } from 'react';
import { CodeWrapper } from './style'

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const onSubmit = (e) => {
        e.preventDefault();

        Login(details)
    }

    return (
        <CodeWrapper>
            <form onSubmit={onSubmit}>
                <div className="form-inner">
                    <h2>Login</h2>
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Email:" required onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="Password:" required onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" className="input" value="LOGIN" />
                </div>
            </form>
        </CodeWrapper>
    )
}

export default LoginForm;
