import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
const SaveTaskOrder=async(itemsArray,edgeArray,orderData)=>{
    try{
        const isOrderPresent=await API.graphql({query:queries.getOrder,variables:{orderID:orderData.order}})
        if(isOrderPresent.data.getOrder==null){
            console.log("Adding start");
            for(var i=0;i<itemsArray.length;i++){
                let childNodes=[];
                for(var j=0;j<edgeArray.length;j++){
                    if(edgeArray[j].source==itemsArray[i].id){
                        for(var k=0;k<itemsArray.length;k++){
                            if(edgeArray[j].target==itemsArray[k].id){
                                childNodes.push(itemsArray[k].data.label)
                            }
                        }
                    }
                }
                // console.log(itemsArray[i].id,childNodes)
                const taskDetails={
                    TaskID:itemsArray[i].data.label,
                    taskStatus:"TASK_TO_START",
                    NodeID:itemsArray[i].data.label,
                    NextNodeName:childNodes,
                    TaskAssignedTo:itemsArray[i].data.assignedUser,
                    isFirstUser:itemsArray[i].data.isFirstUser,
                    TaskDescription:itemsArray[i].data.taskDesc,
                    UserFilePathList:"jdbkwjd/ksnd55/dfa.pdf",
                    AssignedTimeStamp:"1:15",
                    TaskCompletionTime:"12:45",
                    DueDate:itemsArray[i].data.date+"Z",
                    orderTasksId:orderData.order
                }
                const taskData=await API.graphql({query:mutations.createOrderTask,variables:{input:taskDetails}});
                console.log(taskData);
            }
            const date=new Date();
            const currentDate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
            const currentTime=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
            const orderDetails={   
                orderID:orderData.order,
                description:"first order",
                currentStatus:"ORDER_CREATED",
                currentData:currentDate,
                currentTime:currentTime,
                createdDate:currentDate,
                OrderJSON:JSON.stringify({itemsArray}),
                workflowWorkflowOrdersId:orderData.workflow
            }
            const assignedUserOrderDetails={
                userID:"takchirag828@gmail.com",
                orderID:orderData.order
            }
            const responseOrderData=await API.graphql({query:mutations.createOrder,variables:{input:orderDetails}});
            console.log("Order ",responseOrderData);
            const userOrder=await API.graphql({query:mutations.createUserOrderMapping,variables:{input:assignedUserOrderDetails}});
            console.log("Ueser order",userOrder);
        }else{  
            alert("order is present,change name");
        }
    }catch(error){
        console.log("Error is ",error);
    }
}
export default SaveTaskOrder;