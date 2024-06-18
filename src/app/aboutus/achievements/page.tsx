


import styles from "./ach.module.css"
import List from "./components/list/list"
import datacse from "./data/datacse.json"
import dataelec from "./data/dataelec.json"
import datamech from "./data/datamech.json"
import datacivil from "./data/datacivil.json"
import datametal from "./data/datametal.json"

export default function Achievements() {
    return (
     <div>
     
  
    <div className={`${styles.header}`}>Achievements</div>
    <div className=" flex w-[100%]  justify-center">
    <div className={`${styles.subheader}`}>Computer Science and Engineering</div>
    </div>
    <List  {...datacse}/>  
    <div className=" flex w-[100%]  justify-center">
    <div className={`${styles.subheader}`}>Electrical Engineering</div>
    </div>
    <List {...dataelec}/>
    <div className=" flex w-[100%]  justify-center">
    <div className={`${styles.subheader}`}>Mechanical Engineering</div>
    </div>
    <List {...datamech}/>
    <div className=" flex w-[100%]  justify-center">
    <div className={`${styles.subheader}`}>Civil Engineering</div>
    </div>
    <List {...datacivil}/>
    <div className=" flex w-[100%]  justify-center">
    <div className={`${styles.subheader}`}>Metallurgical Engineering & Material Science</div>
    </div>
    <List {...datametal}/>
   
     </div>
      
    );
  }
  