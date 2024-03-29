import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { v4 as uuidv4 } from "uuid";
const SaveTaskOrder = async (itemsArray, edgeArray, orderData, authedUser) => {
  try {
    const date = new Date();
    const orderId = uuidv4();
    const isOrderPresent = await API.graphql({
      query: queries.getOrder,
      variables: { orderID: orderData.order },
    });
    if (isOrderPresent.data.getOrder === null) {
      console.log("Adding start");
      for (let i = 0; i < itemsArray.length; i++) {
        let childNodes = [];
        for (let j = 0; j < edgeArray.length; j++) {
          if (edgeArray[j].source === itemsArray[i].id) {
            for (let k = 0; k < itemsArray.length; k++) {
              if (edgeArray[j].target === itemsArray[k].id) {
                childNodes.push(itemsArray[k].data.label);
              }
            }
          }
        }
        // console.log(itemsArray[i].id,childNodes)
        const assignedTime =
          date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let taskId = uuidv4();
        const taskDetails = {
          TaskID: taskId,
          taskStatus: "TASK_TO_START",
          TaskName: itemsArray[i].data.label,
          NextTaskName: childNodes,
          TaskAssignedTo: itemsArray[i].data.assignedUser,
          isFirstUser: itemsArray[i].data.isFirstUser,
          TaskDescription: itemsArray[i].data.taskDesc,
          UserFilePathList: "demoTask.pdf",
          AssignedTimeStamp: assignedTime,
          TaskCompletionTime: "12:45",
          DueDate: itemsArray[i].data.date + "Z",
          orderTasksId: orderId,
        };
        const taskData = await API.graphql({
          query: mutations.createOrderTask,
          variables: { input: taskDetails },
        });
        console.log(taskData);
      }
      const currentDate =
        date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
      const currentTime =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      const orderDetails = {
        orderID: orderId,
        orderName: orderData.order,
        description: orderData.order,
        currentStatus: "ORDER_CREATED",
        currentData: currentDate,
        currentTime: currentTime,
        createdDate: currentDate,
        OrderJSON: JSON.stringify([ itemsArray , edgeArray ]),
        workflowWorkflowOrdersId: orderData.workflow,
      };
      const assignedUserOrderDetails = {
        userID: authedUser,
        orderID: orderId,
      };
      const responseOrderData = await API.graphql({
        query: mutations.createOrder,
        variables: { input: orderDetails },
      });
      console.log("Order ", responseOrderData);
      const userOrder = await API.graphql({
        query: mutations.createUserOrderMapping,
        variables: { input: assignedUserOrderDetails },
      });
      console.log("User order", userOrder);
      for (let i = 0; i < itemsArray.length; i++) {
        const assignedUserData = {
          userID: itemsArray[i].data.assignedUser,
          orderID: orderId,
        };
        const assignedUserTaskName = await API.graphql({
          query: mutations.createUserOrderMapping,
          variables: { input: assignedUserData },
        });
        console.log("assigned user", assignedUserTaskName);
      }
      return true;
    } else {
      alert("order is present,change name");
    }
  } catch (error) {
    console.log("Error is ", error);
  }
};
export default SaveTaskOrder;
