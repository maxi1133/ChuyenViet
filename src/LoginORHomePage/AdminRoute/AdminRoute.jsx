import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./AdminRoute.scss";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import HomePage from "./HomePage/HomePage";

export default function AdminRoute() 
{
  const dispatch = useDispatch()
  const { i18n } = useTranslation()

  let a = [
    { label: "homepage", route: "/", component: <HomePage/> },
    { label: "chamcong", route: "/CC", component: <div>cham cong</div> },
    {
      label: "accesscontroll",
      route: "/AC",
      component: <div>access controll</div>,
    },
  ];

  ////////////////////////////// function
  




  ////////////////////////////// jsxxxxx
  let SideNav = () => {
    return (
      <div className="SideNav">
        <div className="SideNavlogo">logo</div>
        <div className='SideNavbody'>
          <br/>
          <ul>
            {a.map((val, i) => {
              return (
                <li key={i}>
                  <Link to={val.route}>
                    <Trans i18nKey={val.label}></Trans>
                  </Link>
                </li>
              );
            })}
          </ul>
          <br/>
          <button onClick={e=>{ localStorage.setItem('currentLoginState',1) ;dispatch({type:'setState',payload:1}) }}>Thoát</button>
          <br/>
          <button onClick={e=>{ i18n.changeLanguage('en') }}>en</button> 
          <button onClick={e=>{ i18n.changeLanguage('vi') }}>vi</button>
        </div>
      </div>
    );
  };



  let TopNav = () => 
  {
    return (
      <div className="TopNav">
        <div className="insideTopNav">

        </div>
      </div>
    );
  };



  let Main = () => 
  {
    return (
      <div className="Main">
        <div className="insideMain">
          <div style={{minHeight:'100%' }}>
            <Switch>
              <Route exact path="/" component={ (e) =><HomePage/> } />
              <Route exact path="/CC" component={ (e) => <div>Cham cong</div> } />
              <Route exact path="/AC" component={ (e) => <div>AC</div> } />

              <Route component={ (e) => <div>notthing</div> } />
            </Switch>
          </div >
        </div>
      </div>
    );
  };
  ////////////////////////////// jsxxxxx

  return (
    <BrowserRouter>
      <SideNav />
      <TopNav />
      <Main />
    </BrowserRouter>
  );
}
