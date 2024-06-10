import styles from "./portalform.module.css"

export default function PortalForm() {
  return (
    <>
  <div className={styles.wrapper}>
      <div className={styles.unexpandable}>

        <div className={styles.info}>
          <h2>TRAINING AND PLACEMENT CELL</h2>
          <p>Training and Placement Cell IIT Indore, is the organization which handles all activities related to the campus placement of the graduating batch.</p>
        </div>
        <div className={styles.login}>
          <h1>TPC PORTAL </h1>
          <div className={styles.button}>
            <button>
              <a href="">STUDENT</a>
              <a href="">LOGIN  &mdash;&mdash;&mdash;&gt;</a>
            </button>
            <button>
              <a className={styles.gradientText} href="">RECRUITER</a>
              <a className={styles.gradientText} href="">LOGIN  &mdash;&mdash;&mdash;&gt;</a>
            </button>

          </div>
          
        </div>
      </div>

          <div className={styles.lines1}></div>
          <div className={styles.lines2}></div>
          <div className={styles.lines3}></div>

      </div>
    </>

  );
}
