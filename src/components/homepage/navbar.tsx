import styles from "@/css/navbar.module.css"
import logo from "@/images/homepage/logo.png"



export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>

        <div className={styles.logo}>
          <img src="../images/homepage/logo.png" alt="image" />
          <div className={styles.name}>
            <span className={styles.tpc}>Training and Placement Cell</span>
            <span className={styles.iiti}>Indian Institute of technology, Indore</span>
          </div>
        </div>



      </div>
    </div>

  );
}
