import {v4} from 'uuid';
import {Amplify, Auth, Storage } from 'aws-amplify';
import React from 'react';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import { addWorkFlow } from '../gqlFunctions/WorkflowTable';
import { createOrders } from '../gqlFunctions/OrderTable';

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

    addWorkFlow(data);
    let theRandomNumber = Math.floor(Math.random() * 10) + 1;
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
      }

      createOrders(orderData)

      let theOrderTasknum= Math.floor(Math.random() * 10) + 1;
      for(var k=0; k<theOrderTasknum;k++){
        
      }

    }
  }
}
 
/*export const OrderDummyData = async(wfName,num) => {
  for(var i=0;i<num;i++)
  {

  }
}*/