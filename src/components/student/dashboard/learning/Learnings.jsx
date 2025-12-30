import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookOpen, FaGlobe, FaLanguage, FaStar, FaGraduationCap, FaCertificate, FaChevronRight } from 'react-icons/fa';
import { BiBookHeart } from "react-icons/bi";
import './Learnings.css';

const Learnings = () => {
  const navigate = useNavigate();
  // State for storing departments and courses
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  // MOCK DATA - To be replaced by API
  const mockData = [
    {
      id: 1,
      name: "Department of Islamic Studies",
      icon: <FaBookOpen />,
      courses: [
        { id: 101, title: "Qur'an Studies", subtitle: "Tafseer & Recitation", icon: <FaBookOpen /> },
        { id: 102, title: "Hadith Studies", subtitle: "Prophetic Traditions", icon: <BiBookHeart /> },
        { id: 103, title: "Fiqh & Islamic Law", subtitle: "Jurisprudence", icon: <FaGlobe /> }, // Using generic icon
        { id: 104, title: "Aqeedah & Beliefs", subtitle: "Foundational Creed", icon: <FaStar /> },
      ]
    },
    {
      id: 2,
      name: "Department of Arabic Language",
      icon: <FaLanguage />,
      courses: [
        { id: 201, title: "Arabic Language", subtitle: "Foundation", icon: <FaLanguage /> },
        { id: 202, title: "Nahw & Sarf", subtitle: "Grammar & Morphology", icon: <FaLanguage /> }, // Using same icon for now
        { id: 203, title: "Arabic Literature", subtitle: "Classical Texts", icon: <FaBookOpen /> },
      ]
    },
    {
      id: 3,
      name: "Department of Urdu Language",
      icon: <FaLanguage />,
      courses: [
        { id: 301, title: "Urdu Language", subtitle: "Reading & Writing", icon: <FaLanguage /> },
      ]
    },
    {
      id: 4,
      name: "Special Courses",
      icon: <FaStar />,
      courses: [
        { id: 401, title: "Alimah Course", subtitle: "Adult Women Program", icon: <FaGraduationCap /> },
        { id: 402, title: "Momina Course", subtitle: "Ethical Training", icon: <BiBookHeart /> },
        { id: 403, title: "Da'aiyah Course", subtitle: "Spiritual Growth", icon: <FaBookOpen /> },
      ]
    },
    {
      id: 5,
      name: "Alimiyyah Program",
      icon: <FaGraduationCap />,
      courses: [
        { id: 501, title: "Alimiyyah / Dars-e-Nizami", subtitle: "Full 8-Year Scholarship Program", icon: <FaGraduationCap /> },
      ]
    },
    {
      id: 6,
      name: "Specialization Programs",
      icon: <FaCertificate />,
      courses: [
        { id: 601, title: "Takhassus fi-l-Qur'an", subtitle: "Specialization in Qur'an", icon: <FaBookOpen /> },
        { id: 602, title: "Takhassus fi-l-Hadith", subtitle: "Specialization in Hadith", icon: <BiBookHeart /> },
        { id: 603, title: "Takhassus fi-l-Fiqh", subtitle: "Specialization in Fiqh", icon: <FaGlobe /> },
      ]
    }
  ];

  useEffect(() => {
    // API INTEGRATION POINT
    // TODO: Fetch student's enrolled courses and curriculum structure
    // Endpoint: GET /api/student/curriculum
    // Headers: Authorization: Bearer <token>

    // Example:
    // fetch('/api/student/curriculum')
    //   .then(res => res.json())
    //   .then(data => {
    //     setDepartments(transformData(data));
    //     setLoading(false);
    //   })
    //   .catch(err => console.error(err));

    // Simulating API delay
    setTimeout(() => {
      setDepartments(mockData);
      setLoading(false);
    }, 500);
  }, []);

  const handleCourseClick = (courseId) => {
    // Navigate to course detail page
    // Using simple ID mapping for demo
    // In real app, might use slug or ID directly
    navigate(`/student/learning/quran-studies`); // Hardcoded for demo as per mock data in SubjectDetail
    // navigate(`/student/learning/${courseId}`); // Dynamic version
  };

  if (loading) {
    return <div className="loading">Loading curriculum...</div>;
  }

  return (
    <div className="learnings-page">
      <header className="learnings-header">
        <div className="breadcrumbs">
          Home / <span>My Learning</span>
        </div>
        <h2>My Learning</h2>
        <p>Browse our comprehensive curriculum by department</p>
      </header>

      <div className="departments-list">
        {departments.map((dept) => (
          <section key={dept.id} className="department-section">
            <div className="dept-header">
              <div className="dept-icon">{dept.icon}</div>
              <h2>{dept.name}</h2>
            </div>

            <div className="courses-grid">
              {dept.courses.map((course) => (
                <div
                  key={course.id}
                  className="course-card"
                  onClick={() => handleCourseClick(course.id)}
                >
                  <div className="course-icon-wrapper">
                    {course.icon}
                  </div>
                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <p>{course.subtitle}</p>
                  </div>
                  <div className="course-arrow">
                    <FaChevronRight />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Learnings;
