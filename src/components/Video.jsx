import React from 'react';
import '../css/styles.css';
import tesla_video_desktop from '../videos/tesla_video_desktop.mp4';
import tesla_video_mobile from '../videos/tesla_video_mobile.mp4';

const Video = () => {
      const video_src = window.innerHeight > 700 ? tesla_video_desktop : tesla_video_mobile;
      return (
            <div className="container" style={{height: window.innerHeight}}>
                  <video className="video" src={video_src} muted loop autoPlay playsInline></video>
            </div>
      );
};

export default Video;