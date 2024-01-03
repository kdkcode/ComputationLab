import React from 'react';
import './NewsIntroduction.css'; // CSS 파일 임포트

const Newsintroduction = () => {
  return (
    <div className="body-containers">
      <h1 class="head-intro">Introduction</h1>
      <div className="column">
        <h2 className='title'>RESEARCH INTERESTS</h2>
        <p className='contents'>Our lab investigates formal languages and automata theory. The theory of computation is the branch of computer science and mathematics that deals with whether or not a problem can be solved [computability], how a problem can be solved [complexity] using algorithms.</p>
        <p className='contents'>We are mainly interested in examining structural properties of various models of computations such as finite-state automata or pushdown automata, designing efficient algorithms for those computation models (FAs, PDAs or Turing Machines), and developing applications based on automata theory like fast regular-expression searching engine, pattern matching, information retrieval, and data similarity.</p>
      </div>
      <div className="column">
        <h2 className='title'>Recruitment</h2>
        <p className='contents'>Recruitment in our lab [click for more info in Korean]. We are looking for excellent PhD and master students to develop our lab. We target at training students to publish papers in top international conferences and journals. Our research focuses on very interesting formal language and automata theory problems as summarized in here. Students are invited to get involved in the ongoing projects; and they are also highly encouraged to propose and investigate brand-new problems that they find interesting. Members in our lab would have opportunities to attend top conferences and to visit foreign labs in the related research field.</p>
        <p className='contents'>We are also offering an internship program to undergraduate students (who want to know more about theoretical computer science) at any time. Any students who are interested in our lab, please email us.</p>
      </div>
      <div className="column contact-column">
        <h2 className='title'>Contact</h2>
        <p className='contents'>emmous@yonsei.ac.kr</p>
        <p className='contents'>yonseitoc@gmail.com</p>
      </div>
    </div>
  );
};

export default Newsintroduction;
