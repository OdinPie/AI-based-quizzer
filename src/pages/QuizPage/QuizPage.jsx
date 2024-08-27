import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';

const QuizPage = () => {
    const [data, setData] = useState();
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    useEffect(()=>{
        fetch('http://localhost:5000/questions')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            {!data? 
            <div className='flex flex-col items-center py-20'>
                <img className='w-1/4 animate-pulse' src="/src/assets/loader-01.png" alt="" />
                <h1 className='text-center heading'>Please Wait ...</h1>
            </div> 
            :
            <div className='max-w-6xl mx-auto'>
                
            </div>} 
        </div>
    );
};

export default QuizPage;