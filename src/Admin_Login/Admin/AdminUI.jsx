import React, {  } from "react";
import "./AdminUI.scss";
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import { Trans } from "react-i18next";
import Mail from '@material-ui/icons/MailOutline'
import Alarm from '@material-ui/icons/AlarmOutlined'
import { Badge, IconButton } from "@material-ui/core";
import QuanlyA from "./QuanLyA/QuanlyA";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminUI() 
{

  let sidenavStatus = true
  function hideSideNav() {
    sidenavStatus = !sidenavStatus
    if(sidenavStatus) {
      document.getElementsByClassName('SideNav').item(0).style.transform = 'translateX(0%)'
      document.getElementsByClassName('Main').item(0).style.paddingLeft = '255px'
    } else {
      document.getElementsByClassName('SideNav').item(0).style.transform = 'translateX(-100%)'
      document.getElementsByClassName('Main').item(0).style.paddingLeft = '15px'
    }
  }

  let array = [
    { name: "homepage", route: "/" , icon : <i className="fas fa-home"></i>},
    { name: "chamcong", route: "/CC" , icon : <i className="fas fa-home"></i>},
    // { name: "accesscontroll", route: "/AC" , icon : <i className="fas fa-home"></i>},
  ];

  let Main = () => 
  {
    return (
      <div className="underTopNav">
          {/* sidenav */}
        <div className="SideNav" >
        {array.map((val, i) => {
          return (
            <div key={i} className="SideNavElement">
              <div className='borderdoc'></div>

              <Link className="link" to={val.route}>
                  {val.icon}
                  <span><Trans>{ val.name }</Trans></span>
              </Link>

              <div ></div>
            </div>
          );
        })}
      </div>
      {/* sidenav */}
        <div className="Main">
          <div className="submain">
          <Switch>
              <Route path="/CC" render={ (e)=><QuanlyA/> } />
              <Route path="/AC" render={(e) => <div>Access</div>}  />
              <Route exact path="/" render={(e) => <div>Home</div>}  />
              <Route render={e=> <div>Nothing</div>} />
            </Switch>
          </div>
        </div>

      </div>
    );
  };



  return (
    <Router>
      <div className="TopNav">
            {/* logo */}
            <div className="logo">
                <div className="imagecontainer">
                    {/* image */}
                </div>
                <div className="togglebuttoncontainer">
                <input onChange={e=>{ hideSideNav() }}
                    type="checkbox"
                    className="togglebutton"
                    defaultChecked
                />
                </div>
            </div>
        {/* logo above */}

            <div className="nextLogo">
                <div className="nextLogo__left">

                </div>
                <div className="nextLogo__right">
                    <IconButton>
                        <Badge max={50} badgeContent={4} color='primary'>
                            <Mail/>
                        </Badge>
                    </IconButton>
                    
                    <IconButton>
                        <Badge max={50} badgeContent={4} color='error'>
                            <Alarm/>
                        </Badge>
                    </IconButton>
                    <div>  </div>
                </div>
            </div>
        </div>
      <Main />
    </Router>
  );
}