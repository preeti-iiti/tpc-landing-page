
import data from "./data.json"





export default function AboutTPC() {
    return (
     <div className="flex flex-col gap-10">
     
      <div className="header2">Training And Placement Cell</div>
      
      <div className="para">{data.para1}</div>
      <div className="para">{data.para2}</div>
      <div className="para">{data.para3}</div>
      <div className="para">{data.para4}</div>
  
   
     </div>
      
    );
  }
  