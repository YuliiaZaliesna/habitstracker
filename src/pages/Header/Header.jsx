import PageTypes from "../helpers/PageTypes";
import './HederStyle.scss';

function Header(props){
    const { pageType } = props; // => const pageType = props.pageType
    return(
        <div className= "headers">
            {pageType !== PageTypes.INSTRUKCJA ? <button>Instrukcja</button> : "" }
            {pageType !== PageTypes.FAQ ? <a href={"/questions"}><button>Po co ci to?</button></a> : "" }
            {pageType !== PageTypes.HOMEPAGE ? <a href={"/home"}><button>Zaloguj się</button></a> : "" }
        </div>
    )
}
export default Header;