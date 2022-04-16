import { API } from 'aws-amplify'
import * as queries from '../graphql/queries'
const orderArray=[];
const getOrderDetails=async(userMail)=>{
    try{
        const userOrderList=await API.graphql({query:queries.getUser,variables:{email:userMail}})
        const orderList=userOrderList.data.getUser.orders.items;
        for(var i=0;i<orderList.length;i++){
            // console.log(orderList[i].orderID);
            const orders=await API.graphql({query:queries.getOrder,variables:{orderNum:orderList[i].orderID}})
            const orderDetails=orders.data.getOrder
            // console.log(orderDetails);
            orderArray.push(orderDetails);
        }
        // console.log(orderArray);
        return(
            orderArray
        )
    }catch(error){
        console.log("Error is ",error);
    }
}
export default getOrderDetails;