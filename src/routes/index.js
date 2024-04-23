import React from "react";
import Home from "../views/home";
import { Routes, Route } from "react-router-dom";



const index = ()=>{
    return(
        <Routes>
            <Route element={<Home />} path ="/"></Route>
            <Route element={<Home />} path="/home"></Route>
            


        </Routes>

    );
}

export default index

