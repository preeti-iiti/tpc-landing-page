

import ContactCard from "./ContactCard";
import {Button} from "@nextui-org/react";
import data from "./Info.json";
import FacultyProfile from "./FacultyProfile";
import FacultyProfile2 from "./pgteam";
import styles from "./FacultyProfile.module.css";

export default function StaffTeam() {
    return (
     <div className=" flex flex-col gap-[35px]">
     
  

      
      <div className="questitle">tpc staff</div>
   <ContactCard></ContactCard>
   <div className="questitle">placement team</div>

   <div className="header3">undergraduate</div>

   <Button color="danger" variant="light" size="lg">
    <div className={`para my-3 text-wrap `}>Computer Science and Engineering</div>
      </Button>

      <FacultyProfile {...data.teamug[0]}></FacultyProfile>

      <Button color="danger" variant="light" size="lg">
    <div className={`para my-3 text-wrap`}>Electrical Engineering</div>
      </Button>

      <FacultyProfile {...data.teamug[1]}></FacultyProfile>

      <Button color="danger" variant="light" size="lg">
    <div className={`para my-3 text-wrap`}>Mechanical Engineering</div>
      </Button>

      <FacultyProfile {...data.teamug[2]}></FacultyProfile>

      <Button color="danger" variant="light" size="lg">
    <div className={`para my-3 text-wrap`}>Mettalurgical Engineering and Materials Science
    </div>
      </Button>

      <FacultyProfile {...data.teamug[3]}></FacultyProfile>

      <Button color="danger" variant="light" size="lg">
    <div className={`para my-3 text-wrap`}>Civil Engineering</div>

      </Button>

      <FacultyProfile {...data.teamug[4]}></FacultyProfile>



      <div className="header3">postgraduate</div>

      
      <div className={styles.cardContainer}>
      {data.teampg.map((item,index) => (
   
        <FacultyProfile2 key={index} {...item}></FacultyProfile2>

      ))}
    
    </div>






    
     </div>

     
    );
  }
  