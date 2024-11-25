import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleSubmit = () =>{

    }
    return (
        <div className='flex'>
            <img className='w-1/2' src="/src/assets/register.jpg" alt="register" />
            <div className='flex flex-col justify-center items-center'>
            <h1 className="text-4xl my-10 py-2 colorful-text">Please Register</h1>
            <form onSubmit={handleSubmit} className='card-body font-maven' action="">
                
                <input type="text" name='name' placeholder='Your Name' className="input input-bordered rounded-none" size={50} required /><br />
                
                <input type="email" name='email' placeholder='Your Email' className="input input-bordered rounded-none" required /><br />
                <input type="text" name='photoURL' placeholder='Your Photo' className="input input-bordered rounded-none" required /><br />
                <input type="password" name="password" placeholder='Password' className="input input-bordered rounded-none" id="" required/><br />
                
                <input type="submit" className="btn" value="Register" />
                <p className="text-lg text-center my-3 colorful-text">Already have an account? <Link className="underline text-salmon" to="/login">Log In</Link> </p>
            </form>
            <Link to={"/"}><button className='btn'>Home</button></Link>
        </div>
        </div>
        
    );
};

export default Register;