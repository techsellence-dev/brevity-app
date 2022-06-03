import { API } from 'aws-amplify'
import * as queries from '../graphql/queries'
const getOrderDetails=async(userMail)=>{
    try{
        const userOrderList=await API.graphql({query:queries.getUser,variables:{email:userMail}})
        const orderItemList=userOrderList.data.getUser.orders.items;
        // console.log('All user order Details are: ' + JSON.stringify(orderItemList));
        const orderSet = new Set();
        for (const orderItem of orderItemList) {
            // console.log('Current Order Data: ' + JSON.stringify(orderItem.order));
            orderSet.add(orderItem.order);
        }
        return orderSet;
    }catch(error){
        console.log("Error is ",error);
    }
}
export default getOrderDetails;