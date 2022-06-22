import React from "react";
import immg from "../components/images/new  jump man.png";
import eimg from "../components/images/Ellipse4eclips.png";
import google from "../components/images/flat-color-icons_google.png";
import facebook from "../components/images/simple-icons_facebook.png";
import { Spinner } from "./Spinner";
import img4 from "../components/images/eye-regular.svg";
import { Outlet } from "react-router-dom";

function SIgnIN(
  Onchange,
  SignIN,
  updatedFormState,
  formState,
  GoogleSignIn,
  FaceBookSignIn,
  USer,
  passwordShown,
  setPasswordShown
) {
  const togglePassword = () => {
    if (passwordShown === true) {
      setPasswordShown(false);
    }
    if (passwordShown === false) {
      setPasswordShown(true);
    }
  };

  return (
    <>
      <div className="page_container">
        <Spinner />
        <h2 className="H2">Login</h2>
        <img src={eimg} alt="" className="img1" />
        <div className="div3">
          <div className="div22">
            <h3 className="H3">Login with Social media</h3>
            <div className="socialbutton hoverpointer" onClick={GoogleSignIn}>
              <img src={google} alt="" className="socialimg" /> Sign in with
              Google
            </div>
            <div className="socialbutton hoverpointer" onClick={FaceBookSignIn}>
              <img src={facebook} alt="" className="socialimg" /> Sign in with
              Facebook
            </div>
            <h3 className="H3">Login with username</h3>
            <input
              name="username"
              onChange={Onchange}
              placeholder="email"
              className="inpt"
            />
            <div className="showpasswordinput">
              <input
                name="password"
                type={passwordShown ? "text" : "password"}
                onChange={Onchange}
                placeholder="password"
                className="inpt"
              />
              <img
                src={img4}
                alt="eye"
                className="eye-svg hoverpointer"
                onClick={togglePassword}
              />
            </div>
            <button className="bttn" onClick={SignIN}>
              Login
            </button>
            <div className="div1">
              <div
                onClick={() => {
                  updatedFormState(() => ({
                    ...formState,
                    formType: "Forgotpass",
                  }));
                }}
                className="hoverbttn"
              >
                Forgot password?
              </div>
            </div>
          </div>
          <div className="div22">
            <img src={immg} alt="" className="immg" />
          </div>
        </div>

        <div className="div1">
          Don't have an account?
          <div
            onClick={() => {
              updatedFormState(() => ({ ...formState, formType: "signUp" }));
            }}
            className="hoverbttn"
          >
            Sign Up
          </div>
        </div>
      </div>
    </>
  );
}

export default SIgnIN;
