let referenceNode=null;
let selections=0;
let xIncrement;
let yIncrement;
let xVal;
let yVal;
let newXval;
export default function PositionNode(selectedNode){
    try{
        if(referenceNode!=selectedNode.id){
            referenceNode=selectedNode.id;
            xIncrement=200;
            yIncrement=100;
            selections=1;
            xVal=selectedNode.position.x-xIncrement;
            yVal=selectedNode.position.y+yIncrement;
            newXval=0;
        }
        else{
            if(selections%2!=0){
                newXval=xVal+xIncrement;
            }
            else{
                newXval=xVal-xIncrement;
            }
            selections++;
            xIncrement=xIncrement+100;
        }
        const newNodePostition={
            x: newXval, 
            y: yVal
        }
        return newNodePostition;
    }catch(error){
        console.log(error)
    }
}