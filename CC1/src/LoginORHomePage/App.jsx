import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Admin1/Login/Login";


/////////////////////////////////////////////////////////////


// import TestAdminRoute from './Admin1/AdminRoute/AdminRoute'; // Admin1

import TestAdminRoute from "./Admin2/TestUIAdmin/TestAdminRoute";   // Admin2

// import TestAdminRoute from './Admin3_CV/Route3/Admin3Route'
// import Axios from "axios";


/////////////////////////////////////////////////////////////


export default function App() 
{
  let currentState = useSelector(state => state.LoginSTT.LOGINstatus)
  const dispatch = useDispatch()

  useEffect(() => {

    if(Number(localStorage.getItem('currentLoginState')) === 3) dispatch({type : 'setState',payload:3})

    return () => { 

    }
  })

  // Axios.post('/').then()
  // console.log(currentState)

  return currentState === 3 ? <TestAdminRoute/> : <Login stt = {currentState} />
}
 