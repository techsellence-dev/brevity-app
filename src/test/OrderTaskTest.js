import { API, Auth } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import { v4 as uuidv4 } from 'uuid';
const orders=[
    "first",
    "second",
    "third",
    "fourth",
    "fivth",
    "sixth",
    "seventh",
    "eight",
    "ninth",
    "tenth"
]
let users=[
    "gaz.infinite@gmail.com",
    "k.s.shivanand23@gmail.com",
    "thatheraaayushi@gmail.com",
    "abhishek.jangid643@gmail.com",
    "takchirag828@gmail.com",
    "gaz.infinite@gmail.com",
    "k.s.shivanand23@gmail.com",
    "thatheraaayushi@gmail.com",
    "abhishek.jangid643@gmail.com",
    "takchirag828@gmail.com",
]
const OrderTaskTest=async(number,setOrderNum,setTaskNum)=>{
    let i=0;
    let j=0
    try{
        const json=[{"name": "chirag", "task": "100 orders"}]
        const authedUser=await Auth.currentAuthenticatedUser();
        while(i<number){
            const date=new Date();
            console.log("Adding start");
            const currentDate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
            const currentTime=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
            if(j==orders.length-1){
                j=0;
            }
            const id=uuidv4();
            const orderDetails={   
                orderID:id,
                orderName:orders[j],
                description:orders[j],
                currentStatus:"ORDER_CREATED",
                currentData:currentDate,
                currentTime:currentTime,
                createdDate:currentDate,
                OrderJSON:JSON.stringify({json}),
                workflowWorkflowOrdersId:"demo"
            }
            setOrderNum(`order number ${i+1}`)
            const responseOrderData=await API.graphql({query:mutations.createOrder,variables:{input:orderDetails}})
            console.log("Order ", i ,responseOrderData);

            let taskNumbers=Math.random()*10;
            console.log(taskNumbers)
            for(var k=0;k<taskNumbers-1;k++){
                const taskOrderData={
                    TaskID:uuidv4(),
                    taskStatus:"TASK_TO_START",
                    TaskName:`order ${orders[j]} Task ${k}`,
                    NextTaskName:["one","two"],
                    TaskAssignedTo:users[k],
                    isFirstUser:false,
                    TaskDescription:`${k} task `,
                    UserFilePathList:`${orders[k]}.pdf`,
                    AssignedTimeStamp:currentTime,
                    TaskCompletionTime:currentTime,
                    DueDate:"1970-01-01Z",
                    orderTasksId:id
                }
                const taskData=await API.graphql({
                    query:mutations.createOrderTask,
                    variables:{input:taskOrderData}
                });
                setTaskNum(`Task number ${k+1}`);
                console.log(k+1,taskData);
            }
            
            const assignedUserOrderDetails={
                userID:authedUser.attributes.email,
                orderID:id
            }
            
            const userOrder=await API.graphql({query:mutations.createUserOrderMapping,variables:{input:assignedUserOrderDetails}})
            console.log("User order",userOrder);
            j++;
            i++;
        }
    }catch(error){
        console.log("Error is ",error);
    }
}
export default OrderTaskTest;