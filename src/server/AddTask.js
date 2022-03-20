import { DataStore } from '@aws-amplify/datastore';
import { OrderTable } from '../models';
async function addTask(order,taskName,taskdesc){
    if(order==null || taskName==null || taskdesc==null){
        alert("Please enter all fields");
    }
    else{
        // console.log(order,taskName,taskdesc)
        const date = new Date();
        const currentDate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
        const currentTime=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();        
        await DataStore.save(
            new OrderTable({
                "OrderNUmber": order,
                "TaskName": taskName,
                "TaskDesc": taskdesc,
                "Time": currentTime,
                "Date": currentDate,
            })
        );
        const models = await DataStore.query(OrderTable);
        console.log(models);
        alert("Data Added");
    }
}
export default addTask;