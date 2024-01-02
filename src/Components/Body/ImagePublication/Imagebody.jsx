// ImageComponent.jsx
import React from 'react';
import './Imagebody.css'; // CSS 파일 임포트
import banner from '../../../assets/banner_space.png'

const ImagePublication = () => {
  return (
    <div className="image-container">
      <img src={banner} alt="Descriptive Alt Text" />
      <div className="centered">
   
        <h1>Publications</h1>
        <p>ToC</p>
       

        
        </div> {/* 텍스트 추가 */}
    </div>
  );
};

export default ImagePublication;
