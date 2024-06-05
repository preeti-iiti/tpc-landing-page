import styles from "@/css/navbar.module.css"




export default function Navbar(props: any) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.unexpendable}>

        <div className={styles.logo}>
          <img src={props.logo} alt="iit indore" className={styles.iitilogo} />
          <div className={styles.name}>
            <div className={styles.tpc}><span className={styles.hindi}>प्रशिक्षण एवं नियोजन कक्ष</span><span className={styles.partition}> | </span><span className={styles.english}>Training and Placement Cell</span></div>
            <div className={styles.iiti}><span className={styles.hindi}>भारतीय प्रौद्योगिकी संस्थान, इंदौर</span><span className={styles.partition}> | </span><span className={styles.english}>Indian Institute of technology, Indore</span></div>
          </div>
        </div>

        <div className={styles.modals}>
          <ul>

            {

              props.buttons.map((val: any,index:any) => {
                {
                  let abc = val.ismodal
                  if (abc) {
                    return <li className={styles.modalbutton} key={index}>{val.title}<img src={val.modalbutton} className={styles.dropdown} alt="\/"></img></li>
                  }
                  else {
                    return <li className={styles.modalbutton} key={index}>{val.title}</li>
                  }

                }
              }

              )

            }


          </ul>

        </div>

        <div className={styles.menu}>

          <div className={styles.topbar}></div>
          <div className={styles.midbar}></div>
          <div className={styles.lowbar}></div>

        </div>



      </div>
    </div>

  );
}
