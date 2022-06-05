import { Auth } from "aws-amplify";
import {Navigate} from "react-router-dom";
import React from "react";
async function SignOUT() {
  try {
    await Auth.signOut();
    console.log("Signed Out successfully");
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

export default SignOUT;
