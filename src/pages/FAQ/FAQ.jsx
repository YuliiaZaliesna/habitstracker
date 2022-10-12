import PageTypes from "../helpers/PageTypes";
import Header from "../Header/Header";
import Article from "./Article/Article";
import './FaqStyle.scss';

function FAQ(){
    return (
        <div className={"faqpage"}>
            <Header pageType={PageTypes.FAQ}/>
            <Article />
        </div>
    );
}

export default FAQ;