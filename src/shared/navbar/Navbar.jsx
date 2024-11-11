import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [expandModal, setexposeModal] = useState(false);
    return (
    <div className='fixed top-0 left-0 z-10 w-full h-[94px]'>
        <div className={expandModal? 'translate-y-[500] duration-1000 relative overflow-hidden bg-indigo-200 h-screen':'-translate-y-[900px] duration-1000 overflow-hidden'}>
        <div className='flex justify-center gap-10 pt-10'>
            <div className='flex flex-col w-1/4 justify-between'>
            <img className='scale-110' src="/src/assets/White_only.png" alt="quizzly-white-logo" />
            <div className='bg-white w-1/3 p-10 hover:bg-black hover:text-purple-400 rounded-3xl absolute -bottom-4 -left-2 text-center'>
                <Link to={"/register"} ><h1 className='text-xl font-medium'>Register</h1></Link>
            </div>
            </div>
            
            <div className='text-white'>
            <div className='text-7xl roboto font-semibold'>
                <h1 className='hover:translate-x-14 duration-500'>Input Text</h1>
                <h1 className='hover:translate-x-14 duration-500'>Input Document</h1>
                <h1 className='hover:translate-x-14 duration-500'>AI Tutorbot</h1>
                <h1 className='hover:translate-x-14 duration-500'>Instant Feedback</h1>
            </div>
            <div className='my-10'>
            <p>About us</p>
            <p>Competence center</p>
            <p>Responsibility</p>
            <p>Careers</p>
            <p>Downloads</p>
            </div>
            </div>
           {/* <button className='absolute top-0 right-0' onClick={()=>{setexposeModal(false)}}>
           <svg
                className="swap-on fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 512 512">
                <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
            </button>  */}
        </div>
        
        </div>
        <div className='flex justify-between absolute top-0 left-0 w-full'>
            <Link to="/"><img className='w-20 pt-2'src="/src/assets/Blackk_only.png" alt="" /></Link>
            <div className='flex items-center justify-around bg-black text-white h-[94px] w-1/4 px-12 -m-2 -mr-4 hover:w-1/5 duration-1000 rounded-3xl'>
                <Link to={"/login"}><h1 className='text-xl font-medium'>Login</h1></Link>
                
                {!expandModal? <button onClick={()=>{setexposeModal(true)}}><svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg></button> :
                <button onClick={()=>{setexposeModal(false)}}>
                <svg
                     className="swap-on fill-white"
                     xmlns="http://www.w3.org/2000/svg"
                     width="32"
                     height="32"
                     viewBox="0 0 512 512">
                     <polygon
                     points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                 </svg>
                 </button> }
            

            </div>
        </div>
    </div>
    );
};

export default Navbar;