import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login"
import Signup from "../Pages/SignUp/SignUp";
import Back from "../Components/Background/Background";
import Reset from "../Pages/Reset/Reset";
import Forgot from "../Pages/Forgot Password/Forgot";
import Table from "../Components/Table/Table";
import SideBar from "../Components/SideBar/SideBar";
import TeamMember from "../Pages/Team Member/TeamMember";

const Routing=()=>{
    return(
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/back" element={<Back />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/table" element={<Table />} />
            <Route path="/sidebar" element={<SideBar />} />
            <Route path="/team" element={<TeamMember />} />
        </Routes>
    );
};

export default Routing;