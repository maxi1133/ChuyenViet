import React, {  } from 'react';
import Login from "./Admin_Login/Login/Login";
import AdminUI from "./Admin_Login/Admin/AdminUI";
import { useSelector } from 'react-redux';

function App() 
{
  const loginState = useSelector(state => state.LoginSTT.LOGINstatus)
  

  console.log(loginState)
  let UI = loginState === 1 ?  <AdminUI/> : <Login/> 
  return UI
}

export default App;
