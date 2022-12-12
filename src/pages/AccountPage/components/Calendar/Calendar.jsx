import './CalendarStyle.scss';
import Image from "./Image";
import {useEffect, useState} from "react";

function Calendar(props){
    const { updateReload } = props;
    const [ userName, setUserName] = useState("Imię");
    const [ userHabits, setUserHabits] = useState([]);
    useEffect(()=>{
        //Call to BE, get user data
        const name = {
            action:{
                type: "userInfo"
                }
        };
        fetch("http://localhost/roboczy/diplomBE/endpoints.php", {
            method: "POST",
            body: JSON.stringify(name),
            credentials: 'include'
        })
            .then(res => res.json())
            .then((res) => {
                setUserName(res["loginn"]);
            });
        const habits = {
            action:{
                type: "userHabits"
            }
        };
        fetch("http://localhost/roboczy/diplomBE/endpoints.php", {
            method: "POST",
            body: JSON.stringify(habits),
            credentials: 'include'
        })
            .then(res => res.json())
            .then((res) => {
                setUserHabits(res);
            });
        //Call to BE, get Habist
        //
    },[]);


    let amount = 21;

    const addDays = (checkedDays, startDate, habitId) => {
        const date = new Date(startDate);
        const days = [];
        for(let i = 0; i < amount; i++){
            let currentDate = new Date(date.getTime() + i*24*60*60*1000);
            let isChecked = checkedDays.some((day) => { return new Date(day.dzien).getDate() === currentDate.getDate() });
            days.push(<Image
                day = {i+1}
                date = {currentDate}
                isChecked = {isChecked}
                nawyk = {habitId}
                updateReload = {updateReload}
            />);
        }
        return <div className="imageDays">{days}</div>;
    }

    const addHabits = () => {
        return userHabits.map((habit) =>{
            return(
            <div className={"singleHabit"}>
                <p>{habit.nazwa_nawyku}</p>
                <div className={"days"}>
                    {addDays(habit.checks, habit.data_rozpoczecia, habit.wybrane_nawyki_id)}
                </div>
            </div>
            );
        });
    }

    return(
        <div className={"containerCal"}>
            <h1>Hej, {userName}</h1>
            <p>Dzisiaj do zrobienia jeszcze masz:</p>
            <div className={"habits"}>
                {addHabits()}
            </div>
        </div>
    );
}

export default Calendar;