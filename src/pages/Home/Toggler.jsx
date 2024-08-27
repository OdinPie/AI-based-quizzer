import React, { useState } from 'react';
import { MdUploadFile } from "react-icons/md";

const Toggler = () => {
    const [text, setText] = useState(true);
    const [uploaded, setUploaded] = useState(false);
    const [filename, setfileName] = useState("");
    const [filesize, setfileSize] = useState(0);
    const fileHandler = () =>{
        const file = document.getElementById('files').files[0];
        console.log("in fileHandler : ",file);
        
        const filename = file.name;
        const filesize = file.size;
        setfileName(filename);
        setfileSize(filesize);
        setUploaded(true);  
    }

    const uploadFile = () =>{
        const file = document.getElementById('files').files[0];
        const formdata = new FormData();
        formdata.append("file",file);
        formdata.append("filename",file.name);
        formdata.append("filesize",file.size);
        const data = {filedata : "donnc"};
        // console.log(file);
        
        fetch('http://localhost:5000/post-file',{
            method: "POST",
            body: formdata
        })
        .then(res => res.json())
        .then(success => console.log(success))
        .catch(error => console.log(error))
    }

    const handleText = () =>{
        const text  = document.getElementById('text-area').value;
        const data = {text};
        // console.log(data);
        const wordCount = text.split(" ").length;
        
        if(wordCount >= 500){
            fetch("http://localhost:5000/post-text",{
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                
                body: JSON.stringify(data)
            })
            .then(res=> res.json())
            .then(data=>console.log(data))
            .catch(error=>console.log(error))
        }
        else{
            alert('Paste atleast 500 words')
        }
    }

    return (
        <div>
            <button onClick={()=>{setText(true)}} className="btn">Text</button>
            <button onClick={()=>{setText(false)}} className="btn">Document</button><br />

            {text ? <div className='text-area'>
            <textarea className="textarea textarea-warning w-1/2 m-5" id='text-area' placeholder="Paste Your Text here to generate quiz ..."></textarea>
            <br /><button onClick={handleText} className="btn">Generate</button>
            </div>
            :
            <div className='file-uploader'>
                <div className='flex flex-col items-center relative'>
                <input type="file" onChange={fileHandler} className="filer z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 size-80" id='files' />
                <div className='flex flex-col justify-center items-center w-1/2 p-20 my-10 rounded-lg border-2 border-dashed border-blue-600 bg-[#D1E9F6] relative'>
                    <MdUploadFile className='text-6xl animate-pulse'></MdUploadFile><br />
                    {
                        !uploaded? <p>Drag & Drop or Upload Your Document Here</p> : <p className=''>{filename}</p>
                    }
                </div>
                </div>
                <button onClick={uploadFile} className="btn">Upload</button>
                
            </div>}

            
        </div>
    );
};

export default Toggler;