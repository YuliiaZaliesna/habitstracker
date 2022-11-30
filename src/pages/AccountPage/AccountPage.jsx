import PageTypes from "../helpers/PageTypes";
import Header from "../Header/Header";
import Calendar from "./components/Calendar/Calendar";
import './AccStyle.scss';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function AccountPage(){

    return (
        <div className={"accPage"}>
            <Header pageType={PageTypes.ACCOUNT} />
            <Calendar />
        </div>
    );
}

export default AccountPage;