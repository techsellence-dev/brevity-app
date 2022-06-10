const ChangeData=(selectedNode,items,taskname,taskdesc,nextUser,date,setNodeDataState)=>{
    try{
        if(selectedNode==null){
            throw "Plaease select an Node for Assigning a Data";
        }
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
    }catch(error){
        alert(error)
    }
}
export default ChangeData;