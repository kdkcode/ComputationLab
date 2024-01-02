import React from 'react';
import './ResearchComponents.css'

const ResearchComponent = () => {
    const researchTopics = [
        {
            title: "Edit Distance of Formal Languages",
            contents: [
                "Measuring similarity between String and Language",
                "Language and Language",
                "Designing various edit distance measures",
                "Designing automata to compute similarity",
                "Designing efficient algorithm to retrieve edit distance"
            ]
        },
        {
            title: "Regex matching implementation for information retrieval",
            contents: [
                "Efficient regex matching implementation",
                "ReDoS detection and prevention",
                "Characterizing regex of super-linear behavior in ReDoS",
                "Converting a ReDoS regex to a non-ReDoS regex (if possible)"
            ]
        },
        {
            title: "Formal grammars for NLP",
            contents: [
                "Rules of grammars for self-learning, few-shot learning, data augmentation",
                "Efficient parsing algorithms and implementations",
                "Probabilistic automata for neural models",
                "Neuro-symbolic models and logical reasonings"
            ]
        },
        {
            title: "Deep learning for NLP in Software codes",
            contents: [
                "Code Search: Retrieving relevant code snippets from a natural language query",
                "Code Summarization: Summarizing source codes in natural language descriptions"
            ]
        },
        {
            title: "Deep learning for NLP in Semi-supervised learning",
            contents: [
                "Self-training few-shot text classification",
                "Dataset label correction",
                "Train-Validation splitting"
            ]
        },
        {
            title: "Implementation of automata, algorithms and applications",
            contents: [
                "Detecting explicit or implicit abusive text"
            ]
        },
        {
            title: "Detecting explicit or implicit abusive text",
            contents: [
                "Detecting explicit or implicit abusive text"
            ]
        }
    ];
    

    return (
        <div className="research-container">
            {researchTopics.map((topic, index) => (
                <div key={index} className="research-card">
                    <h2>{topic.title}</h2>
                    <ul>
                        {topic.contents.map((content, index) => (
                            <li key={index}>{content}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default ResearchComponent;
