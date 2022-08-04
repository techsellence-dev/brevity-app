import {API} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
const SetUserDetails=async(email,name)=>{
    try {
        let userData={
            email: email,
            name: name,
            isAdmin: true,
            phone: "4544545454",
            superwiserEmail: email,
            organization: "Techsellence",
            isApproved: true,
            isEmailApproved: true,
            isPhoneVerified: false,
            isGooleSignIn: false,
            isFacebookSignIn: false,
            isGeneralAuthSignIn: true
        }
        const userDetails=await API.graphql({
            query:mutations.createUser,
            variable:{
                input:userData
            }
        });
        console.log(userDetails);
    } catch (error) {
        console.log(error);
    }
}
export default SetUserDetails;