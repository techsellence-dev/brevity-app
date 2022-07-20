import {v4} from 'uuid';
import {Amplify, Auth, Storage } from 'aws-amplify';
import React from 'react';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import { addWorkFlow } from '../gqlFunctions/WorkflowTable';
import { createOrders,updateOrders } from '../gqlFunctions/OrderTable';
import { createTask } from '../gqlFunctions/OrderTaskTable';
import { createMapping } from '../gqlFunctions/TaskCommentMapping';

const randomEnumValue = (enumeration) => {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumeration[enumKey];
  }

export const WorkflowDummyData = async(num) => {
  for(var i=0;i<num;i++)
  {
    let name = v4();
    let def = LoremIpsum()[0].props.children;
    /*const bool = {
        True:"true",
        False:"false"
      }
    let saveBool=randomEnumValue(bool)*/

    let rand = Boolean(Math.round(Math.random()));

    

    const data = {
        workflowName: name,
        WorkFlowJSON:"{\"a\":1, \"b\":3, \"string\": 234}",
        WorkFlowDescription:def,
        SaveAsDraft:rand,
        CreatedBy: "String",
        OwnedBy: "String",
    }

    await addWorkFlow(data);
    let theRandomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(theRandomNumber)
    for(var j=0; j<theRandomNumber;j++){
      let dummyordername=v4();
      let dummyorderId=v4();
      let def = LoremIpsum()[0].props.children;
      const currentStatusE = {
        a:"ORDER_CREATED",
        b:"ORDER_IN_PROGRESS",
        C:"ORDER_CANCELLED",
        D:"ORDER_COMPLETED"
      }
      let saveBool=randomEnumValue(currentStatusE)

      const orderData={
        orderID: dummyorderId,
        orderName: dummyordername,
        description: def,
        currentStatus: saveBool,
        currentData: def,
        currentTime: 'String!',
        createdDate: 'String!',
        OrderJSON:"{\"hello\":20}",
        workflowWorkflowOrdersId:name
      }

      await createOrders(orderData)
      //updateOrders()

      let theOrderTasknum= Math.floor(Math.random() * 10) + 1;
      console.log(theOrderTasknum)
      for(var k=0; k<theOrderTasknum;k++){
        let dummytaskid=v4();
        let dummytaskname=v4();
        const taskStatusE = {
          a:"TASK_FORWARD",
          b:"TASK_CANCELLED",
          C:"TASK_COMPLETED",
          D:"TASK_IN_PROGRESS",
          e:"TASK_TO_START"
        }
        let saveBool2=randomEnumValue(taskStatusE);
        let rand2 = Boolean(Math.round(Math.random()));
        let def2 = LoremIpsum()[0].props.children;
        const dummyTaskData = {
          TaskID: dummytaskid,
          taskStatus: saveBool2,
          TaskName: dummytaskname,
          NextTaskName: [""],
          TaskAssignedTo: 'fgrag',
          isFirstUser: rand2,
          TaskDescription: def2,
          UserFilePathList: ['asfgghj'],
          AssignedTimeStamp: 'String',
          TaskCompletionTime: 'String',
          DueDate: '1969-01-01Z',
          orderTasksId: dummyorderId
        }
        await createTask(dummyTaskData);
        let theMapnum= Math.floor(Math.random() * 3) + 1;
        console.log(theMapnum)
        for(var l=0; l<theMapnum;l++){
          let filename=v4();
          const file = v4();
          const data = await Storage.put(filename,file, {
            contentType: "application/pdf", // contentType is optional
          });
          //console.log(data);
          const get = await Storage.get(data.key);
          //console.log(get);
          const url = get.split("?");
          const need = url[0];
          const uri = "s3://brevitybucket151458-staging/public/"+data.key;
          
          let theCommentnum= Math.floor(Math.random() * 3) + 1;
          console.log(theCommentnum)
          for(var m=0;m<theCommentnum;m++){
            let filename2=v4();
            let content2=v4();
            const data = await Storage.put(filename2,content2, {
              contentType: "text/plain", // contentType is optional
            });
            //console.log(data);
            const get2 = await Storage.get(data.key);
            //console.log(get);
            const url2 = get2.split("?");
            const need2 = url2[0];
            const uri2 = "s3://brevitybucket151458-staging/public/"+data.key

            const commentData={
              commentPath: uri2,
              filePath: uri,
              orderTaskID:dummytaskid
            }

            await createMapping(commentData)
          }
        }
      }

    }
  }
}
 
/*export const OrderDummyData = async(wfName,num) => {
  for(var i=0;i<num;i++)
  {

  }
}*/