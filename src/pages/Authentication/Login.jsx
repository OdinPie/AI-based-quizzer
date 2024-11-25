import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleSubmit = () =>{

    }

    return (
        <div className='flex'>
        <div className='flex flex-col justify-center items-center w-1/2 h-screen'>
            <div className="text-4xl colorful-text py-2 my-10">Please Login</div>
            <form onSubmit={handleSubmit} className='card-body font-maven' action="">
                <input type="email" name='email' placeholder='Your Email' className="input input-bordered rounded-none" size={50} required /><br />
                <input type="password" name="password" placeholder='Password' className="input input-bordered rounded-none" id="" required/><br />
                <input type="submit" className="btn" value="Login" />
                <p className="text-lg text-center my-3 colorful-text">Do not have an account? <Link className="underline text-salmon" to="/register">Sign Up</Link> </p>
            </form>
            <Link to={"/"}><button className='btn'>Home</button></Link>
        </div>
        <img className='w-1/2' src="/src/assets/login.jpg" alt="" />
        </div>
    );
};

export default Login;