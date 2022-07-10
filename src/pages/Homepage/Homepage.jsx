import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import PageTypes from "./helpers/PageTypes";

function Homepage(){

    return (
        <div>
            <Header pageType={PageTypes.HOMEPAGE}/>
            <Login/>
        </div>
    );
}

export default Homepage;