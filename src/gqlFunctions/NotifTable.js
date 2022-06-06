import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import {validateEmail,validatePhone} from '../test/InputTest';

export const createNewNotif = async (notifDetails) => {
    if(notifDetails.userNotificationsId=="" || notifDetails.NotificationStatus=="" || notifDetails.NotificationContent=="" || notifDetails.NotifyTime==""){
        throw new Error("null value not allowed")
        }
        validateEmail(notifDetails.userNotificationsId)
    try {
        const addNotif = await API.graphql({ query: mutations.createUserNotifications, variables: { input: notifDetails } })
        console.log("Notif has been added", addNotif);
    } catch (error) {
        console.log("error in creating ", error);
        throw new Error(error)

    }
}

export  const updateNotif = async(user)=>{
    if(user.id==""){
        throw new Error("notif id can't be null")
    }
    try {
      console.log("Get user to update ")
        const updatedNotif=await API.graphql({query:mutations.updateUserNotifications,variables:{input: user}});
        console.log("Updated Notif is ",updatedNotif);
    }catch (error) {
        console.log("Error in updating ",error);
        throw new Error(error)

    }
}

export const deleteNotifByMail = async (Mail) => {
    if(Mail.id==""){
        throw new Error("notif id can't be null")
    }
    try {
        const deletedNotif = await API.graphql({ query: mutations.deleteUserNotifications, variables: {input: Mail} })
        console.log("Deleted Notif is ", deletedNotif);
    } catch (error) {
        console.log("Error in deleting ", error);
        throw new Error(error)

    }
}

export const listNotifications = async () => {
    try{
        const listNotifData=await API.graphql({query:queries.listUserNotifications});
      console.log(listNotifData);
    }catch(error){
        console.log("Error in listing", error)
        throw new Error(error)
    }
}

export const listNotifbyStatus = async (data) =>{
    try{
        const listNotif=await API.graphql({query:queries.userByNotifStatus, variables: {NotificationStatus: data.NotificationStatus }});
        console.log(listNotif)
    }catch(error){
        console.log("Error in list by status",error)
        throw new Error(error)
    }
}

export const convertStatus = async () => {

    try {
        const statusData = {
            NotificationStatus:"UNSEEN",
          }
        const userNotifData = await API.graphql({ query: queries.userByNotifStatus, variables: {NotificationStatus: statusData.NotificationStatus } });
        console.log("Notif with Unseen status", userNotifData.data.userByNotifStatus)
        const listItems = userNotifData.data.userByNotifStatus.items;
        console.log(listItems.length)
      for(var i=0 ; i<listItems.length ; i++)
      {
          console.log(i)
          console.log(listItems[i].id)
          const updateList = {
              id: listItems[i].id,                  
              _version: listItems[i]._version,
              NotificationStatus: "SEEN"
            }
          const updateTheNotifications = await API.graphql({ query: mutations.updateUserNotifications,variables:{input: updateList}});
          console.log("updated notifs are", updateTheNotifications.data.updateUserNotifications);
      }
      const listNotifData=await API.graphql({query:queries.listUserNotifications});
      console.log(listNotifData);
     //   var len =  arrr.length;    
    }
    catch (error){
        console.log("Error in converting", error);
        throw new Error(error)

    }
}