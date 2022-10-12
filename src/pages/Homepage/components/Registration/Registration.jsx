import './RegistrationStyle.scss';

const Registration = (props) => {
    const {setState} = props;
    return(
        <div className={"containerReg"}>
            <div className={"registrationComponent"}>
                <h1>Zarejestruj się</h1>
                <div className={"inputs"}>
                    <input type="text" placeholder="Podaj login" />
                    <input type="password" placeholder="Podaj hasło" />
                    <input className={"btnsubmit"} type="submit" value="Utworz konto" />
                </div>
                <h5>Już masz konto?</h5>
                <button onClick={() => {setState("login")}} className={"signupbtn"}>Zaloguj się</button>
            </div>
        </div>
    );
}
export default  Registration;