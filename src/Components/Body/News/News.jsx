import React from 'react';
import './News.css'; // CSS 파일 임포트

const News = () => {
  return (
    <div className="body-container">
      <div className="column">
      <h2 className='title'>RESEARCH INTERESTS</h2>
        <p className='contents'>Formal language and automata theory</p>
        <p className='contents'>Grammar inference: formal grammars vs natural language descriptions</p>
        <p className='contents'>Information retrieval and classification</p>
      </div>
      <div className="column">
        
        <h2 className='title'>NEWS</h2>
        <p className='contents'>[인턴모집공고] 계산이론 연구실에서 겨울방학 인턴을 모집합니다.</p>
        <p className='contents'>We have one paper accepted for EMNLP 2023 and two papers accepted for EMNLP-Findings 2023. Congrats to all co-authors!</p>
        <p className='contents'>We have two papers accepted for CIAA 2023; M-equivalence of Parikh Matrix over a Ternary Alphabet and Smaller Representation of Compiled Regular Expressions. Well done, Joonghyuk, Hyunjoon and Sicheol! Keep pushing.</p>
        <p className='contents'>휴먼-AI 협업 프로그래밍 플랫폼 과제 2단계가 시작되었습니다. 기간은 2023.03 ~ 2026.02 입니다.</p>
        {/* 다른 뉴스나 연구 관심사 추가 */}
      </div>

        



    </div>
  );
};

export default News;
