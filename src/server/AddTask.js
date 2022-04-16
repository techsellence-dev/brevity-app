import { API,graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
const addTask=async(order,taskdesc,userMail)=>{
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
            const orderdata=await API.graphql({query:mutations.createOrder,variables:{input:orderDetails}})
            console.log('Created order data: ' + JSON.stringify(orderdata));
            const userorderdata=await API.graphql({query:mutations.createUserOrderMapping,variables:{input:userorderDetails}})
            console.log('Created user order mapping: ' + JSON.stringify(userorderdata));
        }
    } catch (error) {
        console.log("Error is ",error);
    }
}
export default addTask;