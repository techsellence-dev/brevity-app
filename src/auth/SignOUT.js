import { Auth } from "aws-amplify";
async function SignOUT() {
  try {
    let signOutResponse = await Auth.signOut();
    console.log("sign out response: " + signOutResponse);
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

export default SignOUT;
