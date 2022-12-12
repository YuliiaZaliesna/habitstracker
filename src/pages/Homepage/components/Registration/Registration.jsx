import './RegistrationStyle.scss';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Registration = (props) => {
    const {setState} = props;
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const registerUser = (event) => {
        const data = {
            registrationData: {
                login: login,
                password: login,
                email: email
            }
        };
        fetch("http://localhost/roboczy/diplomBE/endpoints.php", {
            method: "POST",
            body: JSON.stringify(data),
            credentials: 'include'
        })
            .then(res => res.json())
            .then((res) => {
                if(res["uzytkownik_id"] > 0 ){
                    navigate("/account");
                }else{
                    console.log('Register========>',res);
                }
            });
        console.log(event);
        event.preventDefault();
    };
    return(
        <div className={"containerReg"}>
            <div className={"registrationComponent"}>
                <h1>Zarejestruj się</h1>
                <form onSubmit={registerUser}>
                    <div className={"inputs"}>
                        <input type="text" value={login} onChange={(event) => setLogin(event.target.value)}
                               placeholder="Podaj login"/>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}
                               placeholder="Podaj hasło"/>
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}
                               placeholder="Podaj email"/>
                        <input className={"btnsubmit"} type="submit" value="Utworz konto"/>
                    </div>
                </form>
                <h5>Już masz konto?</h5>
                <button onClick={() => {
                    setState("login")
                }} className={"signupbtn"}>Zaloguj się
                </button>
            </div>
        </div>
    );
}
export default  Registration;