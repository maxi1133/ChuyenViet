import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import { useTranslation, Trans } from "react-i18next";
import Login from "./Login/Login";

// import AdminRoute from "./AdminRoute/AdminRoute";

import TestAdminRoute from "./TestUIAdmin/TestAdminRoute";

// import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() 
{
  let currentState = useSelector(state => state.LoginSTT.stt)
  const dispatch = useDispatch()

  useEffect(() => 
  {

    if(Number(localStorage.getItem('currentLoginState')) === 3) dispatch({type : 'setState',payload:3})
    return () => {  }

  })
  
  return currentState === 3 ? <TestAdminRoute/> : <Login stt = {currentState} />
}
 