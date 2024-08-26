import React from 'react';
import Navbar from '../../shared/navbar/navbar';
import Toggler from './Toggler';

const Home = () => {
    return (
        <div className=' text-center p-10 bg-[#CDFADB] relative'>
            <div className="flex flex-col p-10">
            <h1 className='heading text-[#FF8080]'>Generate <span className='lobster-regular text-[#FFCF96]'>Custom MCQs</span> from Your <br /><span className='lobster-regular text-[#FFCF96]'>Documents</span> with AI.</h1>
            <p className='paragraph text-sm text-[#6C946F]'>Upload PDFs or Paste Texts to Instantly Create Tailored Multiple-Choice <br /> Questions  for Learning and Assessment.</p>
            </div>
            <Toggler></Toggler>
        </div>
    );
};

export default Home;