import React, { useState } from 'react';
import { MdUploadFile } from "react-icons/md";

const Toggler = () => {
    const [text, setText] = useState(true);
    const [uploaded, setUploaded] = useState(false);

    return (
        <div>
            <button onClick={()=>{setText(true)}} className="btn">Text</button>
            <button onClick={()=>{setText(false)}} className="btn">Document</button><br />

            {text ? <div className='text-area'>
            <textarea className="textarea textarea-warning w-1/2 m-5" placeholder="Paste Your Text here to generate quiz ..."></textarea>
            <br /><button className="btn">Generate</button>
            </div>
            :
            <form >
            <div className='file-uploader'>
                <div className='flex flex-col items-center relative'>
                <input type="file" className="filer z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 size-80" id="" />
                <div className='flex flex-col justify-center items-center w-1/2 p-20 my-10 border-2 border-dashed border-black bg-[#D1E9F6] relative'>
                    <MdUploadFile className='text-6xl animate-pulse'></MdUploadFile><br />
                    {
                        !uploaded? <p>Upload Your Document Here</p> : <p>Name of the file</p>
                    }
                </div>
                </div>
                <input className='btn' type="submit" value="Upload" />
                
            </div></form>}

            
        </div>
    );
};

export default Toggler;