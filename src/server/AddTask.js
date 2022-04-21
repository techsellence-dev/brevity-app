import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
const addTask=async(order,taskdesc,userMail,assignedUser)=>{
    try {
        if(order==null || taskdesc==null){
            alert("Please enter all fields");
        }
        else{
            const date=new Date();
            const currentDate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
            const currentTime=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
            const orderDetails = {
                orderNum: order,
                description: taskdesc,
                CurrentData:currentDate,
                CurrentTime:currentTime
            };
            const userorderDetails={
                userID:userMail,
                orderID:order
            }     
            const assignedUserOrderDetails={
                userID:assignedUser,
                orderID:order
            }
            const checkUser=await API.graphql({query:queries.getUser,variables:{email:assignedUser}});
            if(checkUser.data.getUser==null){
                alert("Sorry, User not exists");
            }
            else{
                // console.log(checkUser);
                const orderdata=await API.graphql({query:mutations.createOrder,variables:{input:orderDetails}})
                // console.log('Created order data: ' + JSON.stringify(orderdata));
                const userorderdata=await API.graphql({query:mutations.createUserOrderMapping,variables:{input:userorderDetails}})
                const assignedUserOrder=await API.graphql({query:mutations.createUserOrderMapping,variables:{input:assignedUserOrderDetails}});
                // console.log('Created user order mapping: ' + JSON.stringify(userorderdata));
                console.log("Data Added");
            }
        }
    } catch (error) {
        console.log("Error is ",error);
    }
}
export default addTask;