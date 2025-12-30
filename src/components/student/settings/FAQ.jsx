import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaArrowLeft } from 'react-icons/fa';
import './FAQ.css';

const FAQData = [
    {
        id: 1,
        question: "What is Al Burhan?",
        answer: "Al Burhan is an Islamic educational institution dedicated to delivering high-quality religious and academic education in a safe, supportive, and values-based environment."
    },
    {
        id: 2,
        question: "Who can enroll at Al Burhan?",
        answer: "Enrollment is open to students who meet the age and admission requirements established by the madrasa. Admissions are available for various levels of Islamic and academic study."
    },
    {
        id: 3,
        question: "How do I apply for admission?",
        answer: "Applications can be submitted through the Student Portal or by visiting the Administration Office. Required documents and admission timelines will be announced on the website and notice board."
    },
    {
        id: 4,
        question: "Does Al Burhan teach both Islamic and academic subjects?",
        answer: "Yes. Our curriculum includes Qur’an, Hadith, Fiqh, Arabic Studies, and Islamic Ethics along with selected academic subjects appropriate to each level of study."
    },
    {
        id: 5,
        question: "Do parents/guardians have access to student information?",
        answer: "Yes. Parents and guardians may register for portal access to view attendance, academic progress, announcements, and fee information."
    },
    {
        id: 6,
        question: "How do students access the online portal?",
        answer: "Students receive login credentials from the Administration Office after enrollment. These credentials allow secure access to academic records and digital resources."
    },
    {
        id: 7,
        question: "Are online classes offered?",
        answer: "Online learning or blended classes may be provided where appropriate. Details will be announced through the Student Portal and official communication channels."
    },
    {
        id: 8,
        question: "What are the class timings?",
        answer: "Class schedules vary by program and level. Timetables will be provided to students at the start of each term and published in the portal."
    },
    {
        id: 9,
        question: "What fees are required?",
        answer: "Fee structures and payment schedules are communicated during the admission process. Students and parents can also view invoices and payment records through the portal."
    },
    {
        id: 10,
        question: "Is financial assistance available?",
        answer: "Limited financial support may be available for eligible students. Please contact the Administration Office for information on available assistance programs."
    },
    {
        id: 11,
        question: "How is student safety and privacy protected?",
        answer: "Al Burhan is committed to safeguarding student welfare and protecting personal information in accordance with institutional policies and applicable laws."
    },
    {
        id: 12,
        question: "How can I contact the madrasa?",
        answer: "You may contact the Administration Office during working hours for assistance with admissions, records, or general enquiries."
    },
    {
        id: 13,
        question: "Where will important announcements be posted?",
        answer: "All official announcements will be published on the Student Portal and website notice board. Students and parents are encouraged to check regularly."
    },
    {
        id: 14,
        question: "Does the madrasa provide counselling or student support?",
        answer: "Yes. Students have access to academic and spiritual guidance as part of our commitment to holistic education and character development."
    }
];

const FAQ = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <div className="faq-back-btn" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Back to Settings
            </div>

            <div className="faq-header">
                <h2>Frequently Asked Questions</h2>
                <p>Find answers to common questions about Al Burhan.</p>
            </div>

            <div className="faq-container">
                {FAQData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`faq-card ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <h3>{item.id}. {item.question}</h3>
                            <FaChevronDown className="toggle-icon" />
                        </div>
                        <div className="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="faq-contact-info">
                <h3>Still need help?</h3>
                <p><strong>Email:</strong> info@alburhan-demo.org</p>
                <p><strong>Phone:</strong> +123-456-7890</p>
                <p><strong>Office Hours:</strong> Sunday–Thursday, 9:00 AM – 3:00 PM</p>
            </div>
        </div>
    );
};

export default FAQ;
