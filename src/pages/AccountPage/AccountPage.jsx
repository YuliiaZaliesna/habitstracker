import PageTypes from "../helpers/PageTypes";
import Header from "../Header/Header";
import Calendar from "./components/Calendar/Calendar";
import './AccStyle.scss';
import {useCallback, useState} from "react";
import SideBar  from "../sideBarMenu/SideBar";


function AccountPage(){
    const [reloadHeader, setReloadHeader] = useState(0);
    const updateReload = useCallback(() => {
        setReloadHeader(reloadHeader+1);
    });

    return (
        <div className={"accPage"}>
            <Header pageType={PageTypes.ACCOUNT} reloadHeader = {reloadHeader} />
            <Calendar updateReload = {updateReload} />
            <SideBar />
        </div>
    );
}

export default AccountPage;