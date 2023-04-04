import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./home";
import {Login} from "./login";
import {CreateAccount} from "./createAccount";
import React from "react";

export const PageProvider = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>

            <Route path={"/"} element={<Home/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/createAccount"} element={<CreateAccount/>}/>

          </Routes>
        </BrowserRouter>
      </>
  )
}