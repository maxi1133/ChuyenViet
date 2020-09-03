import React from "react";
import "./AdminUI.scss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Trans } from "react-i18next";
import Switch from "react-bootstrap/esm/Switch";
import Mail from '@material-ui/icons/MailOutline'
import Alarm from '@material-ui/icons/AlarmOutlined'
import { Badge, IconButton } from "@material-ui/core";

export default function AdminUI() {
  return (
    <Router>
      <div className="TopNav">
            {/* logo */}
            <div className="logo">
                <div className="imagecontainer">
                    
                </div>
                <div className="togglebuttoncontainer">
                <input
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

                    <div>

                    </div>
                </div>
            </div>
        </div>
      <Main />
    </Router>
  );
}

///////////////////////////////////////////////////////////////// Nav

///////////////////////////////////////////////////////////////// Main
let array = [
    { name: "homepage", route: "/" , icon : <i className="fas fa-home"></i>},
    { name: "chamcong", route: "/CC" , icon : <i className="fas fa-home"></i>},
    { name: "accesscontroll", route: "/AC" , icon : <i className="fas fa-home"></i>},
  ];

let Main = () => 
{
  return (
    <div className="underTopNav">
        {/* sidenav */}
      <div className="SideNav">
      {array.map((val, i) => {
        return (
          <div key={i} className="SideNavElement">
            <div className='borderdoc'></div>
            <Link className="link" to={val.route}>
                {val.icon}
                <span><Trans>{val.name}</Trans></span>
            </Link>
            <div>

            </div>
          </div>
        );
      })}
    </div>
    {/* sidenav */}
      <div className="Main">
        <div className="submain">
          <Switch>
            
            <Route path="/CC" render={(e) => <div>Cham cong</div>}  />
            <Route path="/AC" render={(e) => <div>Access</div>}  />
            <Route exact path="/" render={(e) => <div>Home</div>}  />
            
            <Route render={e=> <div>Nothing</div>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

///////////////////////////////////////////////////////////////// SideNav