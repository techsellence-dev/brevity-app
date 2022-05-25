import React from 'react'
import { validateEmail,validatePhone, testEmail} from './InputTest';
import { createNewUser, getUserByEmail,getUserBySupMail, deleteUserByMail, deleteUserBySupMail, updateUserInfo } from './gqlFunctions/UserTable';
import { createUserData, getDataViaMail, getDataViaSuper, deleteEmail, deleteSuperMail, updateTheUser} from './gqlFunctionTest/UserTest';
import { createNewNotif,updateNotif,deleteNotifByMail, listNotifications } from './gqlFunctions/NotifTable';
import { createNotifData,updateNotifData,deleteNotif} from './gqlFunctionTest/NotifTest';
import { createOrders, deleteOrders, updateOrders, getOrderbyIds } from './gqlFunctions/OrderTable';
import {createOrderData, updateOrderData, deleteOrderData, getOrderviaID} from './gqlFunctionTest/OrderTest';
import { createTask, deleteTask, updateTask, getTaskbyId } from './gqlFunctions/OrderTaskTable';
import { createTaskData, updateTaskData, deleteTaskData, getTaskviaID} from './gqlFunctionTest/OrderTaskTest';
import { addWorkFlow, deletWorkFlow, updateWorkflow, listWorkLFlow } from './gqlFunctions/WorkflowTable';
import {workflowDetails, deleteWfData, updateWorkflowDetails} from './gqlFunctionTest/WorkflowTest';
import { addWorkFlowDefinition, updatedefiniton, deleteDefinition , listDefintions } from './gqlFunctions/WorkflowDef';
import {workflowdefinition, updateWorkflowDefinition, deleteDefData} from './gqlFunctionTest/WorkflowDefTest';

const Test = () => {
  return (
    <div>
      <h1>User table</h1>
      <button onClick={() => createNewUser(createUserData)}>Create new user</button><br/><br/>
      <button onClick={() => getUserByEmail(getDataViaMail.email)}>Get user by email</button><br/><br/>
      <button onClick={() => getUserBySupMail(getDataViaSuper.superwiserEmail)}>Get user by supermail</button><br/><br/>
      <button onClick={() => deleteUserByMail(deleteEmail)}>Delete by email</button><br/><br/>
      <button onClick={() => deleteUserBySupMail(deleteSuperMail.superwiserEmail)}>Delete by supermail</button><br/><br/>
      <button onClick={() => updateUserInfo(updateTheUser)}>Update User</button><br/><br/>

      <h1> Notif table</h1>
      <button onClick={() => createNewNotif(createNotifData)}>Create new notif</button><br/><br/>
      <button onClick={() => updateNotif(updateNotifData)}>Update notif </button><br/><br/>
      <button onClick={() => deleteNotifByMail(deleteNotif)}>Delete notif </button><br/><br/>
      <button onClick={() => listNotifications()}>List notifications </button><br/><br/>

      <h1>validity checks</h1>
      <button onClick={() => validateEmail(testEmail.email)}>test mail </button><br/><br/>
      <button onClick={() => validatePhone(createUserData.phone)}>test number </button><br/><br/>

      <h1>order task</h1>
      <button onClick={() => createTask(createTaskData)}>Create new Task</button><br/><br/>
      <button onClick={() => updateTask(updateTaskData)}>update new Task</button><br/><br/>
      <button onClick={() => deleteTask(deleteTaskData)}>delete new Task</button><br/><br/>
      <button onClick={() => getTaskbyId(getTaskviaID)}>get new Task</button><br/><br/>

      <h1>order table</h1>
      <button onClick={() => createOrders(createOrderData)}>Create new order</button><br/><br/>
      <button onClick={() => updateOrders(updateOrderData)}>update new order</button><br/><br/>
      <button onClick={() => deleteOrders(deleteOrderData)}>delete new order</button><br/><br/>
      <button onClick={() => getOrderbyIds(getOrderviaID)}>get order</button><br/><br/>

      <h1>WF table</h1>
      <button onClick={()=>addWorkFlow(workflowDetails)}>Create workflow</button><br/><br/>
      <button onClick={()=>deletWorkFlow(deleteWfData)}>delete workflow</button><br/><br/>
      <button onClick={()=>updateWorkflow(updateWorkflowDetails)}>updated workflow</button><br/><br/>
      <button onClick={()=>listWorkLFlow()}>list workflow</button><br/><br/>

      <h1>WFD table</h1>
      <button onClick={()=>addWorkFlowDefinition(workflowdefinition)}>Create workflow Definition</button><br/><br/>
      <button onClick={()=>updatedefiniton(updateWorkflowDefinition)}>update workflow Definition</button><br/><br/>
      <button onClick={()=>deleteDefinition(deleteDefData)}>delete workflow Definition</button><br/><br/>
      <button onClick={()=>listDefintions()}>list workflow Definition</button><br/><br/>

    </div>
  )
}

export default Test