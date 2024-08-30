import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom';
// import { width } from '@fortawesome/free-solid-svg-icons/fa0';
const QuizPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let [data, setData] = useState(location.state);
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [result, setResult] = useState(false);
    let [correct, setCorrect] = useState(true);
    let [lock, setLock] = useState(false);
    let [progress, setProgress] = useState((1/data.length));
   

    const checkAnswer = (selected) =>{
        if(!lock){
            setResult(true);
        let status = true;
        let option = document.getElementById(selected);
        option.style.backgroundColor = '#F6EACB';
        setLock(true);
        if(question.answer != selected){
            status = false;
            setCorrect(false);
            // console.log("wrong!!!")
        }else{
            // console.log("correct!!!")

        }
        }
    }

    const nextQuestion = () =>{
        setIndex(++index);
        setQuestion(data[index]);
        setLock(false);
        setResult(false);
        setCorrect(true);
        let updateProgress = (progress+(1/data.length));
        // console.log((updateProgress));
        
        setProgress(updateProgress);
        const options = document.querySelectorAll('.q');
        for(let i=0; i<options.length; i++){
            options[i].style.backgroundColor = '#D1E9F6';
        }
    }

    const styles = {
        width: `calc(${progress}*100%)`,
        transition: '1s ease-in-out'
    }

    return (
        <div>
            {!data? 
            <div className='flex flex-col items-center py-20'>
                <img className='w-1/4 animate-pulse' src="/src/assets/loader-01.png" alt="" />
                <h1 className='text-center heading'>Response Corrupted. PLease Try Again</h1>
                <Link to={'/'} className='btn'>Back to Home</Link>
            </div> 
            :
            <div className='pt-14 paragraph'>
                <div className='flex items-center justify-center gap-2 mb-5'>
                <FontAwesomeIcon onClick={()=>{navigate('/')}} icon={faCircleXmark} className='btn btn-circle btn-xs'/>
                <div className=" bg-slate-100 w-3/4 h-3 rounded-lg">
                <div className={`bg-[#F1D3CE] rounded-lg h-full`} style={styles}></div>
                </div>
                <p className='font-semibold text-slate-500'>{index+1}/{data.length}</p>
                </div>
                <div className='max-w-3xl mx-auto '>
                    <h1 className='font-bold text-xl'>{index+1}. {question.question}</h1><br />
                    <ol className='a font-medium'>
                        <li onClick={()=>{checkAnswer(1)}} id='1' className='q'>{question.options[0]}</li>
                        <li onClick={()=>{checkAnswer(2)}} id='2' className='q'>{question.options[1]}</li>
                        <li onClick={()=>{checkAnswer(3)}} id='3' className='q'>{question.options[2]}</li>
                        <li onClick={()=>{checkAnswer(4)}} id='4' className='q'>{question.options[3]}</li>
                    </ol>
                </div>
                {
                    result && <div className='fixed bottom-0 w-full'>
                        {correct? 
                        <div className='bg-[#DCFFB7] flex items-center justify-center gap-52'>
                            <div className='flex items-center py-2'>
                                <FontAwesomeIcon icon={faCircleCheck} className='text-7xl' style={{color: "#9ADE7B",}} />
                                <h1 className='paragraph ml-5 font-bold text-green-800'>Correct</h1>
                            </div>
                            <div>
                                <button onClick={nextQuestion} className="btn rounded-full w-20 bg-[#9ADE7B] text-white">Next</button>
                            </div>
                            
                        </div> :
                        <div className='bg-[#FCAEAE] flex items-center justify-center gap-52'>
                            <div className='flex items-center py-2'>
                                <FontAwesomeIcon icon={faCircleXmark} className='text-7xl' style={{color: "#FF8080"}}/>
                                <div>
                                <h1 className='paragraph ml-5 font-bold text-red-500'>Correct Answer:</h1>
                                <p className='paragraph ml-5 text-red-500'>{question.options[question.answer-1]}</p>
                                </div>
                                
                            </div>
                            <div>
                                <button onClick={nextQuestion} className="btn rounded-full w-20 bg-[#FF8080] text-white">Next</button>
                            </div>

                        </div>}
                    </div>
                }
            </div>
            
            } 
        </div>
    );
};

export default QuizPage;