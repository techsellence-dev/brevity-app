import '../Css/App2.css';
import React, {useEffect, useState} from 'react';
import {Amplify, API, Auth, Hub} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import eimg from "../Components/images/Ellipse4eclips.png";

import ConfirmSignup from "./ConfirmSignup";
import SignUP from "./SignUP";
import SIgnIN from "./SignIN";
import Forgotpass from "./Forgotpass";
import ConfirmForgotPass from "./ConfirmForgotPass";
import * as queries from '../graphql/mutations';

import awsExports from '../aws-exports';
import App from "../App";

Amplify.configure(awsExports);

const initialFormState = {
  username: '', password: '', email: '', authCode: '', firstname: '', lastname: '', employID: '', phonenumber: '', formType: 'signIn'
}

function BrevityAuth() {
  const [formState, updatedFormState] = useState(initialFormState)
  const [loading, setLoading] = useState(false)
  var {formType} = formState

  function Onchange(e) {
    e.persist()
    updatedFormState(() => ({...formState, [e.target.name]: e.target.value}))
  }

  async function signUp() {
    try {
      const {username, password, email, name, phone_number} = formState
      const {user} = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
          phone_number
        }
      });
      console.log('Sign Up Response: ' + JSON.stringify(user));
      // Create an entry in userTable using graphQL
      const userDetails = {
        email: email,
        name: name,
        isAdmin: false
      }
      const userData = await API.graphql({query: queries.createUser, variables: {input: userDetails}})
      console.log('DDB user data persist response: ' + JSON.stringify(userData));
      updatedFormState(() => ({...formState, formType: "ConfirmsignUp"}))
    } catch (error) {
      alert('error during sign up: ' + JSON.stringify(error));
      console.log('error signing up:', error);
    }
  }


  async function ConfirmsignUp() {
    try {
      const {username, authCode} = formState
      await Auth.confirmSignUp(username, authCode)

      updatedFormState(() => ({...formState, formType: "signIn"}))
    } catch (error) {
      alert(error);
      console.log('error in ConfirmSignUp:', error);
    }
  }

  async function ForgotPass() {
    try {
      const {username} = formState
      await Auth.forgotPassword(username)
          .catch(err => console.log(err));

      updatedFormState(() => ({...formState, formType: "ConfirmForgotpassword"}))
    } catch (error) {
      alert(error);
      console.log('error forgot password:', error);
    }
  }

  async function ConfirmForgotPas() {
    try {
      const {username, authCode, new_password: newPassword} = formState
      await Auth.forgotPasswordSubmit(username, authCode, newPassword)
          .catch(err => console.log(err));
      updatedFormState(() => ({...formState, formType: "signIn"}))
    } catch (error) {
      alert(error);
      console.log('error confirming forgot password:', error);
    }
  }


  async function SignIN() {
    try {
      const {username, password} = formState
      let signInResponse = await Auth.signIn(username, password)
      setLoading(true)
      console.log('sign in response: ' + JSON.stringify(signInResponse));
      updatedFormState(() => ({ ...formState, formType: "signedIn" }));
      setLoading(false)
    } catch (error) {
      alert(error);
      console.log('error in SignIN:', error);
    }

  }

  async function GoogleSignIn() {
    try {
      await Auth.signOut();
      let signInResponse = await Auth.federatedSignIn({ provider: "Google" })
      console.log('sign in response: ' + JSON.stringify(signInResponse));
    } catch (error) {
      alert(error);
      console.log('error in Google SignIN:', error);
    }

  }

  async function FaceBookSignIn() {
    try {
      setLoading(true)
      await Auth.signOut();
      let signInResponse = await Auth.federatedSignIn({ provider: "Facebook" })
      console.log('sign in response: ' + JSON.stringify(signInResponse));
      setLoading(false)
    } catch (error) {
      alert(error);
      console.log('error in Facebook SignIN:', error);
    }
    finally {
    }

  }

  async function resendConfirmationCode() {
    try {
      const {username} = formState
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      alert(err);
      console.log('error resending code: ', err);
    }
  }

if (formType==='signedIn'){
  return <App/>;
}
if(formType==='signUp'){
  return(new SignUP(Onchange, signUp, updatedFormState, formState, eimg));
}
if(formType==='ConfirmsignUp'){
  return(ConfirmSignup(Onchange, ConfirmsignUp, resendConfirmationCode, eimg));
}
if(formType==='signIn'){
  return(SIgnIN(Onchange, SignIN, updatedFormState, formState, GoogleSignIn));
}
if(formType==='Forgotpass'){
  return(Forgotpass(Onchange, ForgotPass, updatedFormState, formState, eimg));
}
if(formType==='ConfirmForgotpassword'){
  return(ConfirmForgotPass(Onchange, ConfirmForgotPas, updatedFormState, formState, eimg));
}
}
export default BrevityAuth;
