import React, { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Viewer.css';
const FileViewer=()=>{
    const [showfile,setShowfile]=useState(null);
    const [msg,setMsg]=useState("No file is uploaded yet");
    const [error,seterror]=useState(true);
    const pdffile=['application/pdf'];
    const handleFiles=(file)=>{
        let Files=file.target.files[0];
        alert(Files.type);
        if(Files){
            if(Files && pdffile.includes(Files.type)){
                let reader=new FileReader();
                reader.readAsDataURL(Files);
                reader.onloadend=(Files)=>{
                    setShowfile(Files.target.result);
                    // console.log(File.target.result);
                    seterror(false);
                }
            }
        }
        else{
            console.log("another file is not allowed");
        }
    }
    return(
        <div className='main'>
            {/* <h1>Add pdfs</h1> */}
            <input 
                type='file'
                onChange={(file)=>handleFiles(file)}
            />
            <div className='pdf-div'>
                {
                error?
                msg:
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                    <Viewer fileUrl={showfile}/>
                </Worker>
                }
            </div>
        </div>
    )
}   
export default FileViewer;