import React from 'react';
import styles from './FacultyProfile.module.css';
import facultyInfo from './facultyInfo.json';
import Image from 'next/image';

const FacultyProfile: React.FC = () => {
    return (
        <div className={styles.cardContainer}>
            {facultyInfo.Faculty.map((faculty, index) => (
                
                <div key={index} className={styles.card}>

                    <div className={`${styles.cardside} ${styles.front}`}>
                    <Image src="/data/logo/iiti.png" alt={faculty.name} className={styles.profileImage} height={100} width={100}/>
                    <div className={styles.info}>
                        <h2>{faculty.name}</h2>
                        <p>{faculty.department}</p>
                    </div>
                 </div>
                 <div className={`${styles.cardside} ${styles.back}`}>
                    <div className=" flex flex-col w-[100%] h-[100%] justify-around items-center">
                        <Image src="/data/logo/iiti.png" alt="IITI" height={250} width={250} className={styles.embeded} />
                    </div>
                    </div>


                </div>
            ))}
        </div>
    );
};

export default FacultyProfile;
