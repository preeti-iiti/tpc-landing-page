
import styles from './gymkhana.module.css'

export default function Gymkhana() {
    return (
        
        <div className={styles.wrapper}>
        <div>
            <h1 className={styles.H1}> Students Gymkhana</h1>
            <p>
            The Student Gymkhana at IIT Indore is led by the Senate, consisting of executives and councillors. Elected representatives focus on fostering student development and leadership through coordinating events and maximizing individual potential. Numerous clubs and groups cater to diverse co-curricular interests.
            </p>
        </div>
        <h2>Tech clubs</h2>
        <section className={styles.table}>
            <div><img src="/data/logo/iiti.png" alt="" /></div>
        </section>
        </div>
        
    );
}