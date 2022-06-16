import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./Uploader.css";

const fileTypes = ["JPEG", "PNG", "GIF", "PDF"];

export default function Uploader() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="App">
      <h1>Upload Files here</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        className="file-Uploader"
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
  );
}
