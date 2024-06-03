import styles from "@/css/portalform.module.css"

export default function PortalForm() {
    return (
     <>
     
      <div className={styles.unexpandable}> 
<div className={styles.info}>
  <h2>STUDENT'S PLACEMENT OFFICE</h2>
  <p>Students' Placement Office of IIT Indore, is the organization which handles all activities related to the campus placement of the graduating batch.</p>
</div>
<div className={styles.login}>
  <h1>TPC PORTAL </h1>
  <div className={styles.button}>
    <div>
      <a href="">STUDENT</a>
      <a href="">LOGIN  &mdash;&mdash;&mdash;&gt;</a>
    </div>
    <div>
      <a className={styles.gradientText} href="">RECRUITER</a>
      <a  className={styles.gradientText} href="">LOGIN  &mdash;&mdash;&mdash;&gt;</a>
    </div>
  
  </div>
  <div className={styles.lines}></div>
  <div className={styles.lines}></div>
  <div  className={styles.lines}></div>
</div>
  </div>
   
     </>
      
    );
  }
  