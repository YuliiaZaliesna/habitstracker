import PageTypes from "../helpers/PageTypes";
import Header from "../Header/Header";
import NewGoalForm from "./NewGoalForm/NewGoalForm";

function AddNewHabitPage(){
    return (
        <div className={"addHabit"}>
            <Header pageType={PageTypes.ACCOUNT} />
            <NewGoalForm />
        </div>
    );
}

export default AddNewHabitPage;