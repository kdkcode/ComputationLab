import React from 'react';
import './PublicationsComponent.css'; // make sure to link the correct CSS file

const PublicationsComponent = () => {
    const publications = [
        {
            type: "Journals",
            articles: [
                {
                    title: "On the Decidability of Infix Inclusion Problem",
                    authors: "Hyunjoon Cheon, Joonghyuk Hahn and Yo-Sub Han",
                    publishedIn: "Theory of Computing Systems",
                    status: "To appear",
                    link: "#",
                },
                {
                    title: "ARED: Automata-based Runtime Estimation for Distributed Systems using Deep Learning",
                    authors: "Hyunjoon Cheon, Jinseung Ryu, Jaecheol Ryou, Chan Yeol Park and Yo-Sub Han",
                    publishedIn: "Cluster Computing, Vol. 26, 2429--2641",
                    date: "Oct. 2023",
                    link: "#",
                },
                {
                    title: "On Simon's Congruence Closure of a String",
                    authors: "Sungmin Kim, Yo-Sub Han, Sang-Ki Ko and Kai Salomaa",
                    publishedIn: "Theoretical Computer Science (TCS), Vol. 972, 114078",
                    date: "Sep. 2023",
                    link: "#",
                },
                // ... more journal articles
            ],
        },
        {
            type: "Conferences",
            articles: [
                {
                    title: "ATHENA: Mathematical Reasoning with Thought Expansion",
                    authors: "JB. Kim, Hazel Kim, Joonghyuk Hahn and Yo-Sub Han",
                    publishedIn: "EMNLP 2023",
                    status: "To appear",
                    link: "#",
                },
                {
                    title: "ConPrompt: Pre-training a Language Model with Machine-Generated Data for Implicit Hate Speech Detection",
                    authors: "Youngwook Kim, Shinwoo Park, Youngsoo Namgoong and Yo-Sub Han",
                    publishedIn: "EMNLP-Findings 2023",
                    status: "To appear",
                    link: "#",
                },
                {
                    title: "GDA: Grammar-based Data Augmentation for Text Classification using Slot Information",
                    authors: "Joonghyuk Hahn, Hyunjoon Cheon, Elizabeth Grace Orwig, Su-Hyeon Kim, Sang-Ki Ko and Yo-Sub Han",
                    publishedIn: "EMNLP-Findings 2023",
                    status: "To appear",
                    link: "#",
                },
                // ... more conference papers
            ],
        },
        // ... more types if any
    ];
    
    return (
        <div className="publications-container">
            {publications.map((section, index) => (
                <div key={index} className="publication-section">
                    <h2 className="publication-type">{section.type}</h2>
                    {section.articles.map((article, index) => (
                        <div key={index} className="publication-card">
                            <h3 className="publication-title">{article.title}</h3>
                            <div className="publication-authors">{article.authors}</div>
                            <div className="publication-info">{article.publishedIn} {article.status}</div>
                            <a href={article.link} className="publication-link">[link]</a>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default PublicationsComponent;
