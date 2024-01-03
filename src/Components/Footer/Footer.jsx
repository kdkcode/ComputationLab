import React from "react";
import "./Footer.css"; // CSS 파일을 임포트합니다.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Theory of Computation Laboratory</p>
        <p>Yonsei university, 50, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea</p>
        <p>Engineering 709</p>
        <ul>
          {/* <li>Department of Computer Science</li>
          <br></br>
          <li>Yonsei University</li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
