import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Banner } from "./Router/Banner";
import { Serve } from "./Router/Serve";
import { Login } from "./Router/Login";

export const Routing = ()=>{
    return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Banner/>}> </Route>
            <Route path='/ser/:id' element={<Serve/>}> </Route>
            <Route path='/log' element={<Login/>}> </Route>
            <Route path='*' element={<Banner/>}> </Route>
          </Routes>
        </BrowserRouter>
    )
}