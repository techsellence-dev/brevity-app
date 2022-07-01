const CreateNode = (nodeName,newNode,newEdge,setNewNodes,setNewEdge,selectedNode,setSelectedNode,i) => {
    let isNodePresent = false;
    try {
      if (nodeName == '') {
        throw "Please provide a node name";
      } else {
        if (newNode.length == 0 || selectedNode == null) {
            setNewNodes([
            ...newNode,
            {
              id: nodeName,
              data: { label: nodeName, isRootNode: true },
              type: "input",
              position: {x: 584, y: 84},
            },
          ]);
        } else {
          for (var i = 0; i < newNode.length; i++) {
            if (newNode[i].id == nodeName) {
              isNodePresent = true;
              alert("Node already present try to give "+nodeName+"("+i+")");
              i++;
            }
          }
          // console.log(isNodePresent);
          if (isNodePresent) {
            setNewEdge([
              ...newEdge,
              {
                id: Math.random() * Math.pow(10, 16),
                type: "smoothstep",
                source: selectedNode.id,
                target: nodeName,
              },
            ]);
            isNodePresent = false;
          } else {
            setNewNodes([
              ...newNode,
              {
                id: nodeName,
                data: { label: nodeName, isRootNode: false },
                position: {x: 376, y: 196},
              },
            ]);
            setNewEdge([
              ...newEdge,
              {
                id: Math.random() * Math.pow(10, 16),
                type: "smoothstep",
                source: selectedNode.id,
                target: nodeName,
              },
            ]);
          }
        }
      }
      // setSelectedNode(null);
    } catch (error) {
      alert(Error);
    }
};
export default CreateNode;