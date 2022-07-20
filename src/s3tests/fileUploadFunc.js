import {v4} from 'uuid';
import awsconfig from '../aws-exports';
import {Amplify, Auth, Storage } from 'aws-amplify';
import { jsPDF } from "jspdf";

Amplify.configure(awsconfig)

export async function onChange(e) {
    const file = e.target.files[0];
    try {
      const data = await Storage.put(file.name, file, {
        contentType: "image/png", // contentType is optional
      });
      console.log("data is", data)
      const get = await Storage.get(data.key);
      console.log(get);
      const url = get.split("?");
      const need = url[0];
      console.log(need);
      const uri = "s3://brevitybucket151458-staging/public/"+data.key
      console.log(uri)
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
}

export const uploadSinglefile = async() => {
  let filename=v4();
  //const element = document.createElement("a");
  const file = v4();
  //let filedata=v4()
  const doc = new jsPDF();
  doc.text("filedata", 10, 10);
  let a= filename+".pdf"
  doc.save(a);
  console.log(JSON.stringify(doc));
  const data = await Storage.put(a,doc, {
    contentType: "application/pdf" // contentType is optional
  });
  console.log(data);
  //const c=document.body.appendChild(element);
  //const d=element.click();
  const get = await Storage.get(data.key);
  console.log(get);
  const url = get.split("?");
  const need = url[0];
  const uri = "s3://brevitybucket151458-staging/public/"+data.key
  console.log(uri)
  console.log(need);
  //setGetfilet(uri)
}