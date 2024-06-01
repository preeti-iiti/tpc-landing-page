import styles from "@/css/navbar.module.css"




export default function Navbar(props:any ) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.unexpendable}>

        <div className={styles.logo}>
          <img src={props.logo} alt="image" className={styles.iitilogo} />
          <div className={styles.name}>
            <span className={styles.tpc}>Training and Placement Cell</span>
            <span className={styles.iiti}>Indian Institute of technology, Indore</span>
          </div>
        </div>

        <div className={styles.modals}>
        <ul>

        {

          props.buttons.map((val: any)=>{
            {let abc = val.ismodal
              if(abc){
                return <li className={styles.modalbutton} key={val.id}>{val.title}<img src={val.modalbutton} className={styles.dropdown} ></img></li>
              }
              else{
                return <li className={styles.modalbutton} key={val.id}>{val.title}</li>
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
