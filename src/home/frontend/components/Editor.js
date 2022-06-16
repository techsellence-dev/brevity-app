import { useState } from "react";
const Editor=()=>{
    const [bold,setBold]=useState(false);
    const [italic,setItalic]=useState(false);
    const [size,setSize]=useState(18)
    const font_size=(operator,size)=>{
        if(operator=="+"){
            size++;
            setSize(size);
        }
        else{
            size--;
            setSize(size);
        }
    }   
     return(
        <div className="editor-container">
            <div className="attribute-btns">
                <div className='btn-div'>
                  <div className='circular-btn'
                    onClick={()=>setBold(!bold)}
                  >
                    <p>B</p>
                  </div>
                  <div className='circular-btn'
                    onClick={()=>setItalic(!italic)}
                  >
                    <p>I</p>
                  </div>
                  <div className='circular-btn'
                    onClick={()=>font_size("+",size)}
                  >
                    <p>A+</p>
                  </div>
                  <div className='circular-btn'
                    onClick={()=>font_size("-",size)}
                  >
                    <p>A-</p>
                  </div>
                  <div className='circular-btn' >
                    <p>{size}</p>
                  </div>
                </div>
                <div>
                    <div className="comment-btn">
                        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-attachment-twitter-flatart-icons-outline-flatarticons.png"
                            className="image"
                        />
                        <div className="comment-btn-style">
                            <h1>Comments</h1>
                        </div>                       
                    </div>
                </div>
            </div>
           <textarea className="text-area" 
                cols="40" 
                rows="5"
                name="Data"
                style={bold && italic?{
                    fontWeight:'bold',
                    fontStyle:'italic',
                    fontSize:size,
                }:bold?{
                    fontWeight:'bold',
                    fontStyle:'normal',
                    fontSize:size,
                }:italic?{
                    fontWeight:'normal',
                    fontStyle:'italic',
                    fontSize:size,
                }:{
                    fontStyle:'normal',
                    fontWeight:'normal',
                    fontSize:size,
                }}
                placeholder="Enter Text Here"
           >
            </textarea>
        </div>
    )
}
export default Editor;