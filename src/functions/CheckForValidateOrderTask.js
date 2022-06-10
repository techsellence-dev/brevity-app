import SaveTaskOrder from "../server/SaveTaskOrder";
const checkForValidateOrderTask=async(items,edge,order,workFlowName,priority,dueData,user)=>{
    try{
        for(var i=0;i<items.length;i++){
            if(Object.keys(items[i].data).length==2){
                throw "Please Assign task to Every Node";
            }
        }
        const orderdetail={
            order:order,
            workflow:workFlowName,
            priority:priority,
            duedate:dueData
        }
        const response=await SaveTaskOrder(items,edge,orderdetail,user);
        if(response)
            alert("Order has been created Successfully");
    }catch(error){
       alert(error);
    }
}
export default checkForValidateOrderTask;