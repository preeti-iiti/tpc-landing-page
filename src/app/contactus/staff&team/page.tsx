

import ContactCard from "./ContactCard";
import {Button} from "@nextui-org/react";
import FacultyProfile from "./FacultyProfile";
import data from "./Info.json";

export default function StaffTeam() {
    return (
     <div className=" flex flex-col gap-[35px]">
     
  

      
      <div className="questitle">tpc staff</div>
   <ContactCard></ContactCard>
   <div className="questitle">placement team</div>

   <div className="header3">undergraduate</div>

   <Button color="danger" variant="light">
    <div className={`para my-3 text-wrap`}>Computer Science and Engineering</div>
      </Button>

      <FacultyProfile {...data.teamug[0]}></FacultyProfile>

    
     </div>
    );
  }
  