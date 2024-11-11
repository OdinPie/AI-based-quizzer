import React, { useEffect, useRef } from 'react';
import Toggler from './Toggler';
import VideoPanel from './VideoPanel';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(()=>{
    var cursor = document.getElementById('blob');
    console.log(cursor);
    
    document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`
    });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.waves',
                duration:1,
                scrub:true,
                // markers: true,
                toggleActions: "restart pause reverse pause"
            }, 
            // y: -200,
        });
        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#welcoming1',
                duration:1,
                scrub:true,
                // markers: true,
                toggleActions: "restart pause reverse pause"
            }, 
            // y: -200,
        });
        
        tl.to('.waves',{
            y: -50
        })
        t2.to('#welcoming1',{
            y: -100
        })
        t2.to('#welcoming2',{
            y: -100
        })

    
        
    },[])
    
    return (
    <div>
        <VideoPanel></VideoPanel>
        <div id='blob' className="blob"></div>
        <div className='text-center p-10 relative'>
            <div className="flex flex-col items-center justify-center p-10 my-20 max-w-4xl mx-auto">
            <h1 id='welcoming1' className='heading mt-20 mb-7 leading-none text-white'><span className='colorful-text'>QUIZZLY</span> , Revolutionizing Knowledge Testing  with AI-Driven, Inclusive <br /> Quizzing Solutions</h1>
            <p id='welcoming2' className='paragraph w-1/2 text-gray-300'>Quizzly dynamically generates quizzes from any <span className='colorful-text'>document or text</span>, empowering users with <span className='colorful-text'>instant assessments</span> and insights offering support for personalized analytics</p>
            <div className='flex gap-3 mt-5'>
                <button className="btn rounded-full ">Explore</button>
                <Link to={'/register'}><button className="btn colorful-text outline-8 outline-white text-white rounded-full ">Register</button></Link>
            </div>
            </div>
            <Toggler></Toggler>
        </div>
        </div>
    );
    
};

export default Home;