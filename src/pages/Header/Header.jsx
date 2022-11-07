import PageTypes from "../helpers/PageTypes";
import './HederStyle.scss';
import star from './star.png';

function Header(props){
    const { pageType } = props; // => const pageType = props.pageType
    let level = 1;
    let points = 0;
    if (pageType == PageTypes.ACCOUNT){
        return (
            <div className = "headers">
                <p>Poziom {level}</p>
                <div className="points">
                    <p>{points}</p>
                    <img className="star" src={star} />
                </div>
            </div>
        )
    }
    return(
        <div className = "headers">
            {pageType !== PageTypes.INSTRUKCJA ? <button>Instrukcja</button> : "" }
            {pageType !== PageTypes.FAQ ? <a href={"/questions"}><button>Po co ci to?</button></a> : "" }
            {pageType !== PageTypes.HOMEPAGE ? <a href={"/home"}><button>Zaloguj się</button></a> : "" }
        </div>
    )
}
export default Header;