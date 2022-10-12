import Login from "./components/Login/Login";
import Header from "../Header/Header";
import PageTypes from "../helpers/PageTypes";
import Registration from "./components/Registration/Registration";
import {useState} from "react";
import './HomeStyle.scss';

function Homepage(){
    const [state, setState] = useState('login');
    const getContent = () => {
       if (state === 'login') {
           return (<Login setState={setState}/>);
       } else {
           return (<Registration setState = {setState} />);
       }
    };
    return (
        <div className={"homePage"}>
            <Header pageType={PageTypes.HOMEPAGE}/>
            {getContent()}
        </div>
    );
}

export default Homepage;