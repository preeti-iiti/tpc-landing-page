
import Carousel from "@/components/homepage/carousel"
import PortalForm from "@/components/homepage/portalform"
import Recruiters from "@/components/homepage/recruiters"
import Messages from "@/components/homepage/messages"

import CarouselData from "@/data/carousel.json"
import RecruitersData from "@/data/ourrecruiters.json"

export default function Home() {
  return (
   <>
   

   <Carousel {...CarouselData}/>
   <PortalForm />
   <Recruiters {...RecruitersData}/>
   <Messages />


 
   </>
    
  );
}
