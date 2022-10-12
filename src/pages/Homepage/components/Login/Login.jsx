import './LoginStyle.scss';
const Login = (props) => {
    const {setState} = props;
        return(
        <div className={"containerLog"}>
            <div className={"loginComponent"}>
                <h1>Zaloguj się</h1>
                <div className={"inputs"}>
                    <input type="text" placeholder="Podaj login" />
                    <input type="password" placeholder="Podaj hasło" />
                    <input className={"btnsubmit"} type="submit" value="Zaloguj" />
                </div>
                <h5>Jeszcze nie masz konta?</h5>
                <button onClick={() => {setState("register")}} className={"loginbtn"}>Zarejestruj się</button>
            </div>
        </div>
    );
}
export default  Login;