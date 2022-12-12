import './LoginStyle.scss';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    // const history = useHistory();
    const navigate = useNavigate();
    const {setState} = props;
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = (event) => {
        const body = {
            login: login,
            password: password
        };
        // const data = {
        //     registrationData: {
        //         login,
        //         password,
        //         email
        //     }
        // };
        // const data = {
        //     type: "logOut"
        // };
        fetch("http://localhost/roboczy/diplomBE/endpoints.php", {
            method: "POST",
            body: JSON.stringify(body),
            credentials: 'include'
        })
            .then(res => res.json())
            .then((res) => {
                if(res["uzytkownik_id"] > 0 ){
                    navigate("/account");
                }else{
                    console.log('Login========>',res);
                }
            });
        console.log(event);
        event.preventDefault();
    };
        return(
        <div className={"containerLog"}>
            <div className={"loginComponent"}>
                <h1>Zaloguj się</h1>
                <form onSubmit={loginUser}>
                    <div className={"inputs"}>
                        <input type="text" value={login} onChange={(event) => setLogin(event.target.value)}
                               placeholder="Podaj login"/>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}
                               placeholder="Podaj hasło"/>
                        <input className={"btnsubmit"} type="submit" value="Zaloguj"/>
                    </div>
                </form>
                <h5>Jeszcze nie masz konta?</h5>
                <button onClick={() => {setState("register")}} className={"loginbtn"}>Zarejestruj się</button>
            </div>
        </div>
    );
}
export default  Login;