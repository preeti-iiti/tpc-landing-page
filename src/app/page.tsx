import Navbar from "@/components/homepage/navbar"
import Carousel from "@/components/homepage/carousel"
import PortalForm from "@/components/homepage/portalform"
import Recruiters from "@/components/homepage/recruiters"
import Messages from "@/components/homepage/messages"
import Footer from "@/components/homepage/footer"


export default function Home() {
  return (
   <>
   
   <Navbar />
   <Carousel />
   <PortalForm />
   <Recruiters />
   <Messages />
   <Footer />

 
   </>
    
  );
}
