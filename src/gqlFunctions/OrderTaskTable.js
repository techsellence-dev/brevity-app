import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
export const createTask = async (taskDetails) => {
    if(taskDetails.TaskID=="" ||  taskDetails.taskStatus=="" || taskDetails.NodeID=="" || taskDetails.NextNodeName.length==0 || taskDetails.TaskAssignedTo=="" ||  taskDetails.isFirstUser=="" || taskDetails.TaskDescription=="" || taskDetails.UserFilePathList.length==0 || taskDetails.AssignedTimeStamp=="" || taskDetails.TaskCompletionTime=="" || taskDetails.DueDate==""){
        throw new Error("null value not allowed")
    }
    try {
        const addTask= await API.graphql({ query: mutations.createOrderTask, variables: { input: taskDetails } })
        console.log("Task has been added", addTask.data.createOrderTask);
    } catch (error) {
        console.log("error in creating ", error);
        throw new Error(error)

    }
}

export  const updateTask = async(user)=>{
    if(user.TaskID==""){
        throw new Error("null value not allowed")
    }
    try {
      console.log("Get user to update ")
        const updatedTask=await API.graphql({query:mutations.updateOrderTask,variables:{input: user}});
        console.log("Updated Task is ",updatedTask.data.updateOrderTask);
    }catch (error) {
        console.log("Error in updating ",error);
        throw new Error(error)

    }
}

export const deleteTask = async (Mail) => {
    if(Mail.TaskID==""){
        throw new Error("null value not allowed")
    }
    try {
        const deletedTask = await API.graphql({ query: mutations.deleteOrderTask, variables: {input: Mail} })
        console.log("Deleted Task is ", deletedTask.data.deleteOrderTask);
    } catch (error) {
        console.log("Error in deleting ", error);
        throw new Error(error)

    }
} 

export const getTaskbyId = async(userEmail) => {
    if(userEmail.TaskID==""){
        throw new Error("null value not allowed")
    }
    try {
            const getTask = await API.graphql({ query: queries.getOrderTask, variables: {TaskID: userEmail.TaskID }});
            console.log('Task to be read is', getTask.data.getOrderTask)
    }
    catch(error) {
           console.log("Error in gettask",error);
           throw new Error(error)

          }
}