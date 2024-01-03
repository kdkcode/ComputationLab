// ImageComponent.jsx
import React from 'react';
import './Imagebody.css'; // CSS 파일 임포트
import banner from '../../../assets/banner_space.png'

const Imagebody = () => {
  return (
    <div className="image-container">
      <img src={banner} alt="Descriptive Alt Text" />
      <div className="centered">
        <h2>Welcome</h2>
        <h1 class="head">Theory of Computation Lab</h1>
        <p>Department of Computer Science</p>
        <p>Yonsei University</p>

        
        </div> {/* 텍스트 추가 */}
    </div>
  );
};

export default Imagebody;
