


import Activities from './studentactivities';
import Gymkhana from './gymkhana';


export default function StudentActivities() {
    return (
     
    <div className=' flex flex-col gap-[40px]'>
    <div className='header2'>Student Activities</div>
  <Activities></Activities> 

  <Gymkhana></Gymkhana>
  </div>
     
      
    );
  }
  