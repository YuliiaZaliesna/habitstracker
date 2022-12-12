import PageTypes from "../helpers/PageTypes";
import './HederStyle.scss';
import star from './star.png';
import {useEffect, useState} from "react";

function Header(props){
    const { pageType } = props;
    const [ points, setPoints] = useState("0");
    const [ level, setLevel] = useState("1");
    useEffect(()=> {
        const data = {
            action: {
                type: "userInfo"
            }
        };
        fetch("http://localhost/roboczy/diplomBE/endpoints.php", {
            method: "POST",
            body: JSON.stringify(data),
            credentials: 'include'
        })
            .then(res => res.json())
            .then((res) => {
                setPoints(res["points"]);
                setLevel(res["poziom"]);
            });
    }, [reloadHeader]);
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