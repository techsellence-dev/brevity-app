const ChangeData=(selectedNode,items,taskname,taskdesc,nextUser,date,setNodeDataState)=>{
    try{
        if(selectedNode==null){
            throw "Please select an Node for Assigning a Data";
        }
        else if(taskname===null || taskdesc===null || nextUser===null || date===null)
        {
            throw "Please enter all the fields"
        }
        else if(validation(nextUser)){
            
        items.map((nodeLabel)=>{
            if(nodeLabel.id==selectedNode.id){
                // console.log(nodeLabel.data.label);
                nodeLabel.data={
                    label:taskname,
                    taskDesc:taskdesc,
                    assignedUser:nextUser,
                    date:date,
                    isFirstUser:selectedNode.data.isRootNode,
                }
            }
        })
        setNodeDataState(items);
    }
    }catch(error){
        alert(error)
    }
}
 //email validation
 const validation=(email)=>{
    const pattern= /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/;
    try {
        if(!email.match(pattern) || !email.includes('gmail'))
        {
            throw "Not a valid email address!";
            
        }  
        return true;
    } catch (error) {
        alert(error);
        
    }
   
}
export default ChangeData;