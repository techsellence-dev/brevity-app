import { Auth } from 'aws-amplify';
import SetUserDetails from './UserDetails';
async function signUpAut(email, password,name) {
    try {
        const { user } = await Auth.signUp({
            username: email,
            password,
            attributes: {
              email,
              name,
            },
          });
        await SetUserDetails(email,name)
        console.log(user);
    } catch (error) {
       throw(error)
    }
}
export default signUpAut