import {v4} from 'uuid';
import awsconfig from '../aws-exports';
import {Amplify, Auth, Storage } from 'aws-amplify';

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