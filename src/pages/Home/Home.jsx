import React, { useEffect, useRef } from 'react';
import Toggler from './Toggler';
import VideoPanel from './VideoPanel';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
                trigger: '#welcoming',
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
        tl.to('#welcoming1',{
            y: -100
        })
        tl.to('#welcoming2',{
            y: -100
        })

    
        
    },[])
    
    return (
    <div>
        <VideoPanel></VideoPanel>
        <div id='blob' className="blob"></div>
        <div className='text-center p-10 relative'>
            <div className="flex flex-col items-center justify-center p-10 max-w-4xl mx-auto">
            <h1 id='welcoming1' className='heading mt-20 mb-7 leading-none text-white'><span className='text-purple-400'>QUIZZLY</span> , Revolutionizing Knowledge Testing  with AI-Driven, Inclusive <br /> Quizzing Solutions</h1>
            <p id='welcoming2' className='paragraph w-1/2 text-gray-300'>Quizzly dynamically generates quizzes from any <span className='text-purple-400'>document or text</span>, empowering users with <span className='text-purple-400'>instant assessments</span> and insights offering support for personalized analytics</p>
            </div>
            <Toggler></Toggler>
        </div>
        </div>
    );
    
};

export default Home;