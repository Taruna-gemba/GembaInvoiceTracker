import React from 'react';

function Login() {
    return (
        <div>
            <div>
                <h1>GEMBA</h1>
            </div>
            <div>
                <h1>Login to Your Account</h1>
                <form>
                    <label>User Name</label>
                    <input type="text"></input>
                    <br></br>
                    <label>Password</label>
                    <input type="text"></input>
                    <button type="submit">Login</button>
                    <button>Forget Password</button>
                </form>
            </div>
        </div>
    );
}

export default Login;