import {useState} from "react";
import empty from "./empty.png";
import yes from "./yes.png";

function Image() {
    const [status, setStatus] = useState("empty");

    function changeImg(e) {
        setStatus("yes");
    }

    return (<img className="checkBox" src= {status==="empty"? empty : yes} onClick={changeImg} />);
}
export default Image;