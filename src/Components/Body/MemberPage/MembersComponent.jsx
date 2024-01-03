import React, { useState, useEffect } from 'react';
import './MembersComponent.css';
import membersData from './members.json'; // Update with the correct path
import alumniData from './alumni.json'; // Update with the correct path

const MembersComponent = () => {
    const [members, setMembers] = useState([]);
    const [alumni, setAlumni] = useState([]);

    useEffect(() => {
        // Assuming the JSON files are loaded correctly,
        // you'd set your members and alumni data here.
        setMembers(membersData);
        setAlumni(alumniData);
    }, []);

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

    const renderAlumniList = (alumni) => (
        <div style={{columnCount: 1}}> {/* Single column layout */}
            {alumni.map((alum, index) => (
                <div key={index} className="alumni-item">
                    <span className="alumni-name">{alum.name}</span> -
                    <span className="alumni-year">{alum.year}</span> -
                    <span className="alumni-affiliation">{alum.affiliation}</span>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <h1>Memebers</h1>
            <h2>Faculty</h2>
            <div className="members-grid">{renderMemberCards(members.filter(member => member.type === 'Faculty'))}</div>
            <h2>Ph.D Students</h2>
            <div className="members-grid">{renderMemberCards(members.filter(member => member.type === 'Ph.D'))}</div>
            <h2>M.S Students</h2>
            <div className="members-grid">{renderMemberCards(members.filter(member => member.type === 'Ms.Student'))}</div>
            <h2>Alumni</h2>
            <div className="alumni-list">{renderAlumniList(alumni)}</div>
        </div>
    );
}

export default MembersComponent;
