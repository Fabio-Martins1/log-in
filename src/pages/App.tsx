import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./home";
import {Login} from "./login";
import {CreateAccount} from "./createAccount";

export const App = () => {
  return (
      <BrowserRouter>
          <Routes>

              <Route path={"/"} element={<Home />} />
              <Route path={"/login"} element={<Login />}/>
              <Route path={"/createAccount"} element={<CreateAccount />}/>

          </Routes>
      </BrowserRouter>
    );
}