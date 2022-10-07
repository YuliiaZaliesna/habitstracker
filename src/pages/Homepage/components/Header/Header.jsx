import PageTypes from "../../helpers/PageTypes";

function Header(props){
    const { pageType } = props; // => const pageType = props.pageType
    console.log('=============>', props);
    return(
        <div className= "headers">
            {pageType !== PageTypes.INSTRUKCJA ? <button>Instrukcja</button> : "" }
            {pageType !== PageTypes.FAQ ? <button>Po co ci to?</button> : "" }
            {pageType !== PageTypes.HOMEPAGE ? <button>Zaloguj się</button> : "" }
            {pageType !== PageTypes.HOMEPAGE ? <button>Zarejestruj się</button> : "" }
        </div>
    )
}
export default Header;