import { Auth } from 'aws-amplify';
import userDetails from './UserDetails';
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
        await userDetails(email,name)
        console.log(user);
    } catch (error) {
       throw(error)
    }
}
export default signUpAut