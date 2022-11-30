import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './pages/Homepage/Homepage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FAQ from "./pages/FAQ/FAQ";
import AccountPage from './pages/AccountPage/AccountPage';
import AddNewHabitPage from "./pages/AddNewHabitPage/AddNewHabitPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/questions" element={<FAQ/>}/>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="/add_new_habit" element={<AddNewHabitPage/>}/>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
