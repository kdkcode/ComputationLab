import React from 'react';
import './MembersComponent.css'; // 멤버 컴포넌트 스타일
  
  const members = [
    { id: 1, type: 'Faculty', name: "Yo-Sub Han", image: "https://i.ibb.co/st0HkcC/c.jpg", email: "emmous@yonsei.ac.kr", year: "since 2009.03" },
    { id: 2, type: 'Ph.D', name: "Member 1", image: "https://i.ibb.co/st0HkcC/c.jpg", email: "email2@domain.com", year: "2019" },
    { id: 3, type: 'Ms.Student', name: "Member 2", image: "path/to/image3.jpg", email: "email3@domain.com", year: "2021" },
    { id: 4, type: 'Alumni', name: "Alumni 1", email: "email4@domain.com", year: "2017" },
    { id: 5, type: 'Ph.D', name: "Member 1", image: "https://i.ibb.co/st0HkcC/c.jpg", email: "email2@domain.com", year: "2019" },
    { id: 6, type: 'Ph.D', name: "Member 1", image: "https://i.ibb.co/st0HkcC/c.jpg", email: "email2@domain.com", year: "2019" },
    { id: 7, type: 'Ph.D', name: "Member 1", image: "https://i.ibb.co/st0HkcC/c.jpg", email: "email2@domain.com", year: "2019" },
    
  ];
  
  const alumni = [
    { name: "Sang-Min Choi (최상민)", year: "PhD 2015", affiliation: "Gyeongsang National University (경상대학교)" },
    { name: "Sang-Ki Ko (고상기)", year: "PhD 2016", affiliation: "Kangwon National University (강원대학교)" },
    { name: "Youngwook Kim (김영욱)", year: "MS 2023", affiliation: "KT (케이티)" },
    { name: "Youngwook Kim (김영욱)", year: "MS 2023", affiliation: "KT (케이티)" },{ name: "Youngwook Kim (김영욱)", year: "MS 2023", affiliation: "KT (케이티)" }
  ];
  
  
  const MembersComponent = () => {
      // 각 그룹별 멤버를 분류
      const facultyMembers = members.filter(member => member.type === 'Faculty');
      const phdMembers = members.filter(member => member.type === 'Ph.D');
      const msMembers = members.filter(member => member.type === 'Ms.Student');
  
      // 각 그룹별로 멤버 카드를 렌더링하는 함수
      const renderMemberCards = (members) => (
          members.map(member => (
              <div className={`member-card ${member.type.toLowerCase().replace(/[\s.]/g, '-')}`} key={member.id}>
                  <div className="member-image" style={{ backgroundImage: `url(${member.image})` }}></div>
                  <div className="member-info">
                      <div className="member-type">{member.type}</div>
                      <div className="member-name">{member.name}</div>
                      <div className="member-email">{member.email}</div>
                      <div className="member-year">{member.year}</div>
                  </div>
              </div>
          ))
      );
  
      // 알루미니 목록 렌더링 함수
      const renderAlumniList = (alumni) => (
          <ul>
              {alumni.map((alum, index) => (
                  <li key={index} className="alumni-item">
                      <span className="alumni-name">{alum.name}</span> -
                      <span className="alumni-year">{alum.year}</span> -
                      <span className="alumni-affiliation">{alum.affiliation}</span>
                  </li>
              ))}
          </ul>
      );
  
      return (
          <div>
              <h2>Faculty</h2>
              <div className="members-grid">{renderMemberCards(facultyMembers)}</div>
              <h2>Ph.D Students</h2>
              <div className="members-grid">{renderMemberCards(phdMembers)}</div>
              <h2>M.S Students</h2>
              <div className="members-grid">{renderMemberCards(msMembers)}</div>
              <h2>Alumni</h2>
              <div className="alumni-list">{renderAlumniList(alumni)}</div>
          </div>
      );
  }
  
  export default MembersComponent;
  