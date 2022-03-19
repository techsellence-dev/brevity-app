function addTask(order,taskName,taskdesc){
    if(order==null || taskName==null || taskdesc==null){
        alert("Please enter all fields");
    }
    else{
        console.log(order,taskName,taskdesc)
    }
}
export default addTask;