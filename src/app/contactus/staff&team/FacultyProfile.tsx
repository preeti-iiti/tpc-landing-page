import React from 'react';
import styles from './FacultyProfile.module.css';
import facultyInfo from './facultyInfo.json';

const FacultyProfile: React.FC = () => {
    return (
        <div className={styles.cardContainer}>
            {facultyInfo.Faculty.map((faculty, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.info}>
                        <h2>{faculty.name}</h2>
                        <p>{faculty.department}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FacultyProfile;
