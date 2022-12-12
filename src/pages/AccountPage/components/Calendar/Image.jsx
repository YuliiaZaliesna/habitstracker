import {useState} from "react";
import empty from "./empty.png";
import yes from "./yes.png";
import no from "./no.png";

function Image(props) {
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const {day, date, isChecked, nawyk, updateReload} = props;
    const [checked, setChecked] = useState(isChecked);
    function submitAction(e) {
        const progress = {
            action:{
                type: "insertProgress",
                data:{
                    nawykiID: nawyk,
                    dzien: date
                }
            }
        };
        fetch("http://localhost/roboczy/diplomBE/endpoints.php", {
            method: "POST",
            body: JSON.stringify(progress),
            credentials: 'include'
        })
            .then(res => res.json())
            .then((res) => {
                if(res["type"] === "success" ){
                    updateReload();
                    setChecked(true);
                }
            });
    }
    function getIconStatus(){
        if(checked) {
            return yes;
        }
        if(today>date){
            return no;
        }
        return empty;
    }

    return (
        <div>
            <img className="checkBox" src= {getIconStatus()} onClick={submitAction}/>
            <figcaption>{date.toLocaleDateString("en-GB", {day:"numeric", month:"numeric"})}</figcaption>
        </div>
    );
}
export default Image;