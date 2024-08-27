import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';

const QuizPage = () => {
    const [data, setData] = useState();
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState({});
    const [result, setResult] = useState(false);
    const [correct, setCorrect] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/questions')
        .then(res => res.json())
        .then(data => {
            setData(data);
            setQuestion(data[index]);
        })
    },[])

    const checkAnswer = (lock) =>{
        setResult(true);
        let status = true;
        if(question.answer != lock){
            status = false;
            setCorrect(false);
        }
    }
    return (
        <div>
            {!data? 
            <div className='flex flex-col items-center py-20'>
                <img className='w-1/4 animate-pulse' src="/src/assets/loader-01.png" alt="" />
                <h1 className='text-center heading'>Please Wait ...</h1>
            </div> 
            :
            <div className='max-w-3xl mx-auto pt-32 paragraph'>
                <h1 className='font-bold text-xl'>{index+1}. {question.question}</h1><br />
                <ol className='a font-medium'>
                    <li onClick={()=>{checkAnswer(1)}} id='1' className='q'>{question.options[0]}</li>
                    <li onClick={()=>{checkAnswer(2)}} id='2' className='q'>{question.options[1]}</li>
                    <li onClick={()=>{checkAnswer(3)}} id='3' className='q'>{question.options[2]}</li>
                    <li onClick={()=>{checkAnswer(4)}} id='4' className='q'>{question.options[3]}</li>
                </ol>
                {
                    result && <div className='fixed bottom-0'>
                        {correct? 
                        <div className='bg-[#CDFADB]'>
                            
                        </div> :
                        <div className='bg-[#FCAEAE]'>

                        </div>}
                    </div>
                }
            </div>
            
            } 
        </div>
    );
};

export default QuizPage;