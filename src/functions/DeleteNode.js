const DeleteNode = (selectedNode,newNode,newEdge,setNewNodes,setNewEdge) => {
    for (var i = newEdge.length - 1; i >= 0; i--) {
      if (selectedNode.id == newEdge[i].source || selectedNode.id == newEdge[i].target){
        // console.log(i,newEdge[i]);
        newEdge.splice(i, 1);
        // setNewEdge(newEdge);
        // console.log(newEdge.length)
      }
    }
    for (var i = 0; i < newNode.length; i++) {
      if (selectedNode.id == newNode[i].id) {
        newNode.splice(i, 1);
        // newNode.splice(i, 1);
        // setNewNodes(newNode);
        // console.log(newNode.length);
      }
    }
    // setNewNodes(newNode);
    return [newNode,newEdge]
};
export default DeleteNode;