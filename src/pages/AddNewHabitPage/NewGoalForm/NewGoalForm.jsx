import './NewGoalFormStyle.scss';
import plus from "./plus.png";

function NewGoalForm(){
    return(
        <div className={"addNew"}>
            <h1>Dodaj nowy cel</h1>
            <p>Wybierz z listy lub dodaj swój własny</p>
            <p>Masz 2 dostępne komórki</p>
            <div className={"forms"}>
                <div className={"addForm"}>
                    <div className={"selectList"}>
                        <select>
                            <option value="" selected disabled hidden>Wybierz nawyk</option>
                            <option value="1">Czytanie</option>
                            <option value="2">Sport</option>
                            <option value="3">Zdrowe odżywianie</option>
                        </select>
                    </div>
                    <p>Ustaw ilość dni</p>
                    <input type="number" />
                    <p className={"smallText"}>Niema na liście potrzebnego nawyku?</p>
                    <p>Dodaj własny</p>
                    <a href="#">
                        <img className={"plus"} src={plus} />
                    </a>
                </div>
                <div className={"addForm"}>
                    <div className={"selectList"}>
                        <select>
                            <option value="" selected disabled hidden>Wybierz nawyk</option>
                            <option value="1">Czytanie</option>
                            <option value="2">Sport</option>
                            <option value="3">Zdrowe odżywianie</option>
                        </select>
                    </div>
                    <p>Ustaw ilość dni</p>
                    <input type="number" />
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