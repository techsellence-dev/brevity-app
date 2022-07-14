//const [content,setcontent]=useState(null);
import {v4} from 'uuid';
import awsconfig from '../aws-exports';
import {Amplify, Auth, Storage } from 'aws-amplify';

Amplify.configure(awsconfig)

export const uploadSingleComment = async(content) => {
    let filename=v4();
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input").value],{type : "text/plain"});
    const data = await Storage.put(filename,content, {
      contentType: "text/plain", // contentType is optional
    });
    console.log(data);
    const c=document.body.appendChild(element);
    const d=element.click();
    const get = await Storage.get(data.key);
    console.log(get);
    const url = get.split("?");
    const need = url[0];
    const uri = "s3://brevitybucket151458-staging/public/"+data.key
    console.log(uri)
    console.log(need);
    //setGetfilet(uri)
}

export const uploadMultipleComments = async(contentnum) => {
  for(var i=0;i<contentnum;i++)
  {
  let filename=v4();
  let content=v4();
  const element = document.createElement("a");
  const file = new Blob([document.getElementById("input").value],{type : "text/plain"});
  const data = await Storage.put(filename,content, {
    contentType: "text/plain", // contentType is optional
  });
  console.log(data);
  const c=document.body.appendChild(element);
  const d=element.click();
  const get = await Storage.get(data.key);
  console.log(get);
  const url = get.split("?");
  const need = url[0];
  const uri = "s3://brevitybucket151458-staging/public/"+data.key
  console.log(uri)
  console.log(need);
}
  //setGetfilet(uri)
}