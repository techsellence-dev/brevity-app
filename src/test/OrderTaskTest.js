import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
const OrderTaskTest=async()=>{
    try{
        const json=[{"name": "chirag", "task": "100 orders"}]
        let j=500
            for(var i=0;i<50;i++){
                const date=new Date();
                console.log("Adding start");
                const currentDate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
                const currentTime=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                const orderDetails={   
                    orderID:j,
                    orderName:j,
                    description:j,
                    currentStatus:"ORDER_CREATED",
                    currentData:currentDate,
                    currentTime:currentTime,
                    createdDate:currentDate,
                    OrderJSON:JSON.stringify({json}),
                    workflowWorkflowOrdersId:"demo"
                }
                const assignedUserOrderDetails={
                    userID:"takchirag828@gmail.com",
                    orderID:j
                }
                // const responseOrderData=await API.graphql({query:mutations.createOrder,variables:{input:orderDetails}})
                // console.log("Order ", i ,responseOrderData);
                const userOrder=await API.graphql({query:mutations.createUserOrderMapping,variables:{input:assignedUserOrderDetails}})
                console.log("User order",userOrder);
                j++;
            }
            // return true;
    }catch(error){
        console.log("Error is ",error);
    }
}
export default OrderTaskTest;