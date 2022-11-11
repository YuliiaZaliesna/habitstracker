import './CalendarStyle.scss';
import Image from "./Image";

function Calendar(){
    let name = "imię";
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
            <h1>Hej, {name}</h1>
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