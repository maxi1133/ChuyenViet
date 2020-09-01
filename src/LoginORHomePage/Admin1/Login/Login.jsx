import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAdminCSSvsJS3, addCSS, clearCSS } from "../../totalFunction";
// import {  } from "../../totalFunction";

export default function Login(props) {
  const dispatch = useDispatch();

  //////////////////////////////////////// Function trggeer
  let quenmatkhau = () => {
    dispatch({ type: "setState", payload: 2 });
  };

  let dangnhap = (e) => {
    e.preventDefault();
    dispatch({ type: "setState", payload: 3 });
    localStorage.setItem("currentLoginState", 3);
  };

  let back = () => {
    dispatch({ type: "setState", payload: 1 });
  };

  ////////////////////////////////////// Function trggeer
  /////

    let LoginCSSDIR = [
      'LoginCSS/bootstrap.min.css',
      "LoginCSS/font-awesome.min.css",
      "LoginCSS/nprogress.css",
      "LoginCSS/animate.min.css",
      "LoginCSS/custom.min.css",
    ];
    // let admin2CSS =[
    //     'cssTest/vendor/fontawesome-free/css/all.min.css',
    //   //   'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i',
    //     'cssTest/css/sb-admin-2.min.css'
    // ]
    // let admin2Script =[
    //   //   'cssTest/vendor/jquery/jquery.min.js',
    //     'cssTest/vendor/bootstrap/js/bootstrap.bundle.min.js',
    //     'cssTest/vendor/jquery-easing/jquery.easing.min.js',
    //     'cssTest/js/sb-admin-2.min.js'
    // ]

  ///
  ///

  // FORMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

  let LoginForm = () => {
    useEffect(() => {
      console.log(document.styleSheets);
      LoginCSSDIR.forEach((val, i) => {
        addCSS('lgin',val, i);
      });

        return () => 
        {
            // listcss.map((val,i)=>{ return val.remove() })
            // adminCSS.forEach((val,i)=> {
            //     addCSS('adm',val,i)
            // })
            // adminScript.forEach((val,i)=> {
            //     addScript('adm',val,i)
            // })

            clearCSS('lgin')
            
            addAdminCSSvsJS3().then(()=> {  })
        };
      // eslint-disable-next-line
    }, []);

    return (
      <div>
        <div className="login_wrapper">
          <div className="animate form login_form">
            <section className="login_content">
              <form onSubmit={dangnhap}>
                <h1>Login Form</h1>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div>
                  <button className="btn btn-default submit" onClick={dangnhap}>
                    Log in
                  </button>
                  <button
                    className="btn btn-default submit"
                    onClick={quenmatkhau}
                  >
                    Lost your password?
                  </button>
                </div>

                <div className="clearfix"></div>

                <div className="separator">
                  <div className="clearfix"></div>
                  <br />

                  <div>
                    <h1> Bio Star 2!</h1>
                    <p>©2020 VietPro Tech</p>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  };

  let ForgetPassForm = () => {
    return (
      <div>
        <div>ForgetPassForm</div>
        <button onClick={back}></button>
      </div>
    );
  };

  // FORMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmm

  //   console.log(props.stt);
  return props.stt === 1 ? <LoginForm /> : <ForgetPassForm />;
}
