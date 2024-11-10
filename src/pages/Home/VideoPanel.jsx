import React from 'react';

const VideoPanel = () => {
    return (
        <div className='max-h-screen overflow-hidden'>
            <video className="video" autoPlay loop muted src="/src/assets/promo.mp4" type="video/mp4" codecs="avc1.4d002a" alt="video"></video>
            <div className='waves absolute w-[100%] -bottom-1/4 '>
                <img className='translate-y-8' src="/src/assets/outline.png" alt="" />
                <div className='h-32'></div>
            </div>
        </div>
    );
};

export default VideoPanel;