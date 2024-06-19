

import ContactCard from "./ContactCard";
import FacultyProfile from "./FacultyProfile";



export default function StaffTeam() {
    return (
     <div className=" flex flex-col gap-[35px]">
     
  
    <div className="header2">Staff And Team</div>
  
   <ContactCard></ContactCard>

   <div className="header3"></div>
    <FacultyProfile></FacultyProfile>
     </div>
      
    );
  }
  