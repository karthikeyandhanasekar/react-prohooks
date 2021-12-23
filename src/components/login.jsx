import React from "react"

import Header from "./Headers"

const Login = () => {
    // const { authState, authService } = useOktaAuth();

    // const login = () => { authService.login('/search'); }
    // const logout = () => { authService.logout('/'); }

    // const userText = authState.isAuthenticated
    //     ? <div><p>You are signed in!</p><button onClick={logout}>Logout</button></div>
    //     : <div><p>You need to sign in to use the application!</p><button onClick={login}>Sign In</button></div>;

    // return <div className="page-home"><h1>Welcome to Books with Hooks</h1>{userText}</div>;

    const [email, setemail] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [remeber, setrember] = React.useState(false)
    const handlesubmit = (e) => {
        e.preventDefault()
      //  authService.login('/search');
    }


    return (
        <React.Fragment>
            <Header />
            <main>
                <form onSubmit={handlesubmit}>
                    <h1>Okta</h1>
                    <p>Sign in </p>
                    <br />
                    <label>Username</label>
                    <input type="email" name="email" value={email} onChange={e => setemail(e.target.value)} placeholder="Email" />
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={e => setpassword(e.target.value)} placeholder="Password" autoComplete="on" />
                    <br />
                    <input type="checkbox" checked={remeber} onChange={() => setrember((data) => !data)} name="rememberme" id="remeber" ></input>
                    <p>Remember</p>
                    <br />
                    <input type="submit" value={"Sign In"} />

                </form>
            </main>
        </React.Fragment>
    )
}

export default Login