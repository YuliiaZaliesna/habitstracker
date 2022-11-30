import './CalendarStyle.scss';
import Image from "./Image";
import {useEffect, useState} from "react";

function Calendar(){

    const [ userData, setUserData] = useState("Imię");
    useEffect(()=>{
        //Call to BE, get user data
        const data = {
            action:{
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
                setUserData(res["loginn"]);
            });
        //Call to BE, get Habist
        //
    });

    let amount = 21;

    const addDays = () => {
        const days = [];
        for(let i = 0; i < amount; i++){
            days.push(<Image />)
        }
        return <div>{days}</div>
    }

    return(
        <div className={"containerCal"}>
            <h1>Hej, {userData}</h1>
            <p>Dzisiaj do zrobienia jeszcze masz:</p>
            <div className={"habits"}>
                <div className={"singleHabit"}>
                    <p>Czytanie</p>
                    <div className={"days"}>
                    {addDays()}
                    </div>
                </div>
                <div className={"singleHabit"}>
                    <p>Sport</p>
                    <div className={"days"}>
                        {addDays()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar;