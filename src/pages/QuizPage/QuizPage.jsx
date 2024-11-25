import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
    let [score, setScore] = useState(0);

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
        }else{
            setScore(++score);
        }
        }
    }

    const nextQuestion = () =>{
        if(index === data.length-1){
            setProgress(1);
            setQuestion(0);
        }else{
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            setResult(false);
            setCorrect(true);
            let updateProgress = (progress+(1/data.length));
            setProgress(updateProgress);
            const options = document.querySelectorAll('.q');
            for(let i=0; i<options.length; i++){
                options[i].style.backgroundColor = '#D1E9F6';
            }
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
                <h1 className='text-center paragraph'>Response Corrupted. Please Try Again</h1>
                <Link to={'/'} className='btn'>Back to Home</Link>
            </div> 
            :
            <div className='pt-14 paragraph'>
                <div className='flex items-center justify-center gap-2 mb-5'>
                <FontAwesomeIcon onClick={()=>{navigate('/')}} icon={faCircleXmark} className='btn btn-circle btn-xs'/>
                <div className="bg-slate-100 w-3/4 h-3 rounded-lg">
                <div className={`bg-[#F1D3CE] rounded-lg h-full`} style={styles}></div>
                </div>
                <p className='font-semibold text-slate-500'>{index+1}/{data.length}</p>
                </div>
                {
                    question? <div>
                        <div className='max-w-3xl mx-auto '>
                    <h1 className='font-bold text-blue-300 text-xl'>{index+1}. {question.question}</h1><br />
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
                </div>:
                <div className='result-section flex flex-col items-center justify-center text-center gap-3 text-white h-screen'>
                    <FontAwesomeIcon icon={faCircleCheck} className='text-7xl' style={{color: "#F1D3CE"}} />
                    <h1 className='heading'>Quiz Completed</h1>
                    <p className='paragraph'>Assessment</p>
                    <p className='paragraph font-semibold'>Your Score is : {score}/{data.length}</p>
                    <div>
                    <button className="btn border-red-400 rounded-full mr-2">Retry</button>
                    <button className="btn bg-[#F1D3CE] rounded-full">Quit</button>
                    </div>
                    <p><a href='/register'className='text-blue-300'>Create a free account</a> to track and review your answers</p>
                </div>
                }
                
            </div>
            
            } 
        </div>
    );
};

export default QuizPage;