
import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries';
import {validateEmail,validatePhone} from '../InputTest';

// email, name, isAdmin, phone, superviserEmail, isApproved, isEmailApproved, isPhoneVerified, isGooleSignIn,isFacebookSignIn ,isGeneralAuthSignIn

// create instance of userDetails in App.js
 export const createNewUser = async (userDetails) => {
    if(userDetails.email=="" || userDetails.name=="" || typeof userDetails.isAdmin!= "boolean" || userDetails.phone=="" || userDetails.superwiserEmail=="" || typeof userDetails.isApproved!="boolean" || typeof userDetails.isEmailApproved!="boolean" || typeof userDetails.isPhoneVerified!="boolean" || typeof userDetails.isGooleSignIn!="boolean" || typeof userDetails.isFacebookSignIn!="boolean" || typeof userDetails.isGeneralAuthSignIn!="boolean"){
        throw new Error("null value not allowed")
        }
        validateEmail(userDetails.email)
        validatePhone(userDetails.phone)
     try {
         const addUser = await API.graphql({ query: mutations.createUser, variables: { input: userDetails } })
         console.log("User has been added", addUser.data.createUser);
     } catch (error) {
         console.log("error in creating ", error);
         throw new Error(error)

     }
 }

//create instance of Mail in App.js
export const deleteUserByMail = async (Mail) => {
    validateEmail(Mail.email)
    try {
        const deletedUser = await API.graphql({ query: mutations.deleteUser, variables: {input: Mail} })
        console.log("Deleted User is ", deletedUser.data.deleteUser);
    } catch (error) {
        console.log("Error in deleting ", error);
        throw new Error(error)

    }
}

//create instance of supEmail in App.js
export const deleteUserBySupMail = async (userSupEmail) => {
    validateEmail(userSupEmail.superwiserEmail)

    try {
        const userSupData = await API.graphql({ query: queries.userBySuperWisedID, variables: {superwiserEmail: userSupEmail } });
        console.log("User details by supervisor email", userSupData.data.userBySuperWisedID)
        const listItems = userSupData.data.userBySuperWisedID.items;
        console.log(listItems.length)
      for(var i=0 ; i<listItems.length ; i++)
      {
          console.log(i)
          console.log(listItems[i].email)
          const deleteList = {
              email: listItems[i].email,                  
              _version: listItems[i]._version
            }
          const deleteTheUser = await API.graphql({ query: mutations.deleteUser, variables: { input: deleteList} });
          console.log("Deleted User is ", deleteTheUser.data.deleteUser);
      }
     //   var len =  arrr.length;    
    }
    catch (error){
        console.log("Error in getUser", error);
        throw new Error(error)

    }
}



export const getUserByEmail = async(userEmail) => {
    validateEmail(userEmail)

    try {
            const userData = await API.graphql({ query: queries.getUser, variables: {email: userEmail }});
            const x = userData.data.getUser;
            console.log(x)
            console.log("User details by email", userData.data.getUser)
    }
    catch(error) {
           console.log("Error in getUser");
           throw new Error(error)

          }
}

// create instance of userSupEmail in App.js
      export const getUserBySupMail = async (userSupEmail) => {
        validateEmail(userSupEmail)

          try {
              const userSupData = await API.graphql({ query: queries.userBySuperWisedID, variables: {superwiserEmail: userSupEmail } });
              console.log("User details by supervisor email", userSupData.data.userBySuperWisedID)
          }
          catch (error){
              console.log("Error in getUser", error);
              throw new Error(error)

          }
      }

// create instance of updatedData in App.js
     export  const updateUserInfo = async(user)=>{
        validateEmail(user.email)
      try {
        console.log("Get user to update ")
          const getUpdateUser = await API.graphql({query:queries.getUser, variables:{email: user.email}})
          console.log("Get user to update ",getUpdateUser.data.getUser)
          const updatedUser=await API.graphql({query:mutations.updateUser,variables:{input: user}});
          console.log("Updated user is ",updatedUser.data.updateUser);
      }catch (error) {
          console.log("Error in updating ",error);
          throw new Error(error)

      }
  }





// create instance of userByEmail from userModel.js
// export const userByEmail = (email) => {
//     return {
//        email: email
//     }
// }









           
// export default function UserTable{

//      const [mail, setMail] = useState(null)
//      const [name, setName] = useState(null)
//      const [superviserMail, setSuperviserMail] = useState(null)
//      const [admin, setAdmin] = useState(false)
//     const [deletionMail,setDeletionMail]=useState(null);
//     const [updatedName,setUpdateName]=useState();

//     // const userDetails = {
//     //     email: "namrata21@gmail.com",
//     //     name: "Namrata",
//     //     isAdmin: false,
//     //     phone: "8888888888",
//     //     superwiserEmail: "gourab111@gmail.com",
//     //     isApproved: true,
//     //     isEmailApproved: true,
//     //     isPhoneVerified: true,
//     //     isGooleSignIn: true,
//     //     isFacebookSignIn: false,
//     //     isGeneralAuthSignIn: false
//     // };
//     // email, name, isAdmin, phone, superviserEmail, isApproved, isEmailApproved, isPhoneVerified, isGooleSignIn,isFacebookSignIn ,isGeneralAuthSignIn
//     const updatedData={
//         email: "namratasharma@gmail.com",
//         name: updatedName,
//         isAdmin: false,
//         phone: "8888888888",
//         superwiserEmail: "gourab@gmail.com",
//         isApproved: true,
//         isEmailApproved: true,
//         isPhoneVerified: true,
//         isGooleSignIn: true,
//         isFacebookSignIn: false,
//         isGeneralAuthSignIn: false
//     }

//     async function createNewUser(userDetails){
//         try {
//             const createUserData = await API.graphql({ query: mutations.createUser, variables: { input: userDetails } })
//             console.log("Response is ", createUserData.data.createUser);
//         } catch (error) {
//             console.log("error is ", error);
//         }
//     }
 

//      const deleteByEmail = {
//          email: deletionMail
//      }

   



//     return (
//         <div>
//             <button onClick={() => createNewUser()}>Create New Row</button><br/><br/>
//             <input type='text' placeholder='Enter Email for getUser by email' onChange={(supermail)=>setMail(supermail.target.value)}/>
//             <button onClick={() => getUserByEmail()}>Get Data by Email</button><br/><br/> 
//             <input type='text' placeholder='Enter Email for getUser by supervisor email' onChange={(supermail)=>setMail(supermail.target.value)} />
//             <button onClick={() => getUserBySupMail()}>Get Data by Supervisor Email</button><br/><br/>
//             <input type='text' placeholder='Enter Email for deleting the user' onChange={(deletionMail)=>setDeletionMail(deletionMail.target.value)} />
//             <button onClick={()=>deleteTheUser()}>Delete user</button><br/><br/>
//             <input type='text' placeholder='Enter Email for updating the user' onChange={(mail)=>setMail(mail.target.value)} />
//             <input type='text' placeholder='Enter updated name' onChange={(updatedName)=>setUpdateName(updatedName.target.value)} />
//             <button onClick={()=>updateUser()}>Update user</button>
//         </div>
//     )
// }

