import styles from "@/css/navbar.module.css"




export default function Navbar(props:any ) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>

        <div className={styles.logo}>
          <img src="{props.logo}" alt="image" />
          <div className={styles.name}>
            <span className={styles.tpc}>Training and Placement Cell</span>
            <span className={styles.iiti}>Indian Institute of technology, Indore</span>
          </div>
        </div>



      </div>
    </div>

  );
}
