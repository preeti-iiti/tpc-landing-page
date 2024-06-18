"use client";
import React from 'react';
import styles from './ContactCard.module.css';
import info from './Info.json';

const ContactCard: React.FC = () => {
    console.log("Info data: ", info.Info); // Add this line

    return (
        <div className={styles.cardContainer}>
            {info.Info.map((person, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img src="/data/logo/iiti.png" alt={person.name} className={styles.profileImage} />
                        <div className={styles.socialContainer}>
                            {Object.entries(person.social).map(([platform, url]) => (
                                <a href={url} key={platform} className={styles[platform]} target="_blank" rel="noopener noreferrer">
                                    <i className={`fab fa-${platform}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.info}>
                        <h2>{person.name}</h2>
                        <p>{person.position}</p>
                        <p>{person.department}</p>
                        <p>Email: <a href={`mailto:${person.email}`}>{person.email}</a></p>
                        <p>Phone: {person.phone} (Extn. {person.extension})</p>
                        {person.mobile && <p>Mobile: {person.mobile}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactCard;
