const Login = () => {
    return(
        <div className={"container"}>
            {/*<div className={"formsWrapper"}>
                <div className={"loginForm"}>
                    <h1>Zaloguj się</h1>
                        <div className={"inputs"}>
                            <input type="text" placeholder="Podaj login" />
                            <input type="password" placeholder="Podaj hasło" />
                            <input type="submit" value="Zaloguj" />
                        </div>
                    <h5>Jeszcze nie masz konta?</h5>
                    <button className={"loginbtn"}>Zarejestruj się</button>
                </div>
                <div className={"signupForm"}>
                    <h1>Zarejestruj się</h1>
                    <div className={"inputs"}>
                        <input type="text" placeholder="Podaj login" />
                        <input type="password" placeholder="Podaj hasło" />
                        <input type="submit" value="Utworz konto" />
                    </div>
                    <h5>Już masz konto?</h5>
                    <button className={"signupbtn"}>Zaloguj się</button>
                </div>
            </div>*/}
            <div className={"loginComponent"}>
                <h1>Zaloguj się</h1>
                <div className={"inputs"}>
                    <input type="text" placeholder="Podaj login" />
                    <input type="password" placeholder="Podaj hasło" />
                    <input className={"btnsubmit"} type="submit" value="Zaloguj" />
                </div>
                <h5>Jeszcze nie masz konta?</h5>
                <button className={"loginbtn"}>Zarejestruj się</button>
            </div>
        </div>
    );
}
export default  Login;