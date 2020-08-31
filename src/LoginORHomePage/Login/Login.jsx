import React from "react";

import { useDispatch } from "react-redux";

export default function Login(props) 
{
  const dispatch = useDispatch();
  
  //////////////////////////////////////// Function trggeer
  let quenmatkhau = () => {
    dispatch({type : 'setState',payload:2})
  };

  let dangnhap = (e) => {
    e.preventDefault()
    dispatch({ type: "setState", payload: 3 });
    localStorage.setItem('currentLoginState',3)
  };

  let back = () => {
    dispatch({type : 'setState',payload:1})
  }
  //////////////////////////////////////// Function trggeer

  /////
  /////
  /////
  /////
  /////

  // FORMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  function LoginForm(params) 
  {
    return (<div >
        <div className="login_wrapper">
          <div className="animate form login_form">
            <section className="login_content">
              <form onSubmit={dangnhap} >
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
                  <button 
                  className="btn btn-default submit" 
                  onClick={dangnhap}>
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
  }

  let ForgetPassForm = () => {
    return <div>
      <div>
        ForgetPassForm
      </div>
      <button onClick={back}></button>
    </div>;
  };
  // FORMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmm

  // console.log(props.stt);
  return props.stt === 1 ? <LoginForm /> : <ForgetPassForm />;
}