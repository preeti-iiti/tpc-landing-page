import Navbar from "@/components/homepage/navbar"
import Carousel from "@/components/homepage/carousel"
import PortalForm from "@/components/homepage/portalform"
import Recruiters from "@/components/homepage/recruiters"
import Messages from "@/components/homepage/messages"
import Footer from "@/components/homepage/footer"
import FooterData from "@/data/footer.json";
import NavbarData from "@/data/navbar.json";
import CarouselData from "@/data/carousel.json"
import RecruitersData from "@/data/ourrecruiters.json"

export default function Home() {
  return (
   <>
   
   <Navbar {...NavbarData} />
   <Carousel {...CarouselData}/>
   <PortalForm />
   <Recruiters {...RecruitersData}/>
   <Messages />
   <Footer {...FooterData}/>

 
   </>
    
  );
}
