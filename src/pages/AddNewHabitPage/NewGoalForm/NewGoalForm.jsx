import './NewGoalFormStyle.scss';
import plus from "./plus.png";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function NewGoalForm(){
    const getInitialState = () => {
        const value = "";
        return value;
    };
    const [value, setValue] = useState(getInitialState);
    const navigate = useNavigate();
    const [ listOfHabits, setListOfHabits] = useState([]);
    const date = new Date();
    useEffect(()=>{
        const habits = {
            action:{
                type: "listOfHabits"
            }
        };
        fetch("http://localhost/roboczy/diplomBE/endpoints.php", {
            method: "POST",
            body: JSON.stringify(habits),
            credentials: 'include'
        })
            .then(res => res.json())
            .then((res) => {
                    setListOfHabits(res);
            });
    },[]);

    function addNewHabit(event) {
        const newHabit = {
            action:{
                type: "addHabit",
                data:{
                    nawykiID: value,
                    dzien: date
                }
            }
        };
        fetch("http://localhost/roboczy/diplomBE/endpoints.php", {
            method: "POST",
            body: JSON.stringify(newHabit),
            credentials: 'include'
        })
            .then(res => res.json())
            .then((res) => {
                    navigate("/account");
            });
        event.preventDefault();
    }

    const addListOfHabits = () => {
        return listOfHabits.map((habit) =>{
            return(
                <option value={habit.nawyki_id}>{habit.nazwa_nawyku}</option>
            );
        });
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return(
        <div className={"addNew"}>
            <h1>Dodaj nowy cel</h1>
            <p>Wybierz z listy lub dodaj swój własny</p>
            <p>Masz 2 dostępne komórki</p>
            <div className={"forms"}>
                <form onSubmit={addNewHabit}>
                    <div className={"addForm"}>
                        <div className={"selectList"}>
                            <select value={value} onChange={handleChange}>
                                <option value="" selected disabled hidden>Wybierz nawyk</option>
                                {addListOfHabits()}
                            </select>
                        </div>
                        <p>Ustaw ilość dni</p>
                        <input type="number"/>
                        <input className={"btnAddHabit"} type="submit" value="Dodaj nawyk"/>
                        <p className={"smallText"}>Niema na liście potrzebnego nawyku?</p>
                        <p>Dodaj własny</p>
                        <a href="#">
                            <img className={"plus"} src={plus}/>
                        </a>
                    </div>
                </form>
                <div className={"addForm"}>
                    <div className={"selectList"}>
                        <select>
                            <option value="" selected disabled hidden>Wybierz nawyk</option>
                            {addListOfHabits()}
                        </select>
                    </div>
                    <p>Ustaw ilość dni</p>
                    <input type="number" />
                    <input className={"btnAddHabit"} type="submit" value="Dodaj nawyk"/>
                    <p className={"smallText"}>Niema na liście potrzebnego nawyku?</p>
                    <p>Dodaj własny</p>
                    <a href="#">
                        <img className={"plus"} src={plus} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NewGoalForm;