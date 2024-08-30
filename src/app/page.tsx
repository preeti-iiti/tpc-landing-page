import Carousel from "./components/carousel/carousel";
import PortalForm from "./components/portalform/portalform";
import CarouselData from "./components/carousel/carousel.json";
import RecruiterUI from "@/components/recruiters"

import Directorscard from "@/components/directorscard"
import Piccard from "@/components/piccard"

export default function Home() {
  return (
    <>
      <Carousel {...CarouselData} />
      <PortalForm />
   <div>
    <Directorscard/>
    <Piccard/>
    </div>
      <RecruiterUI/>

    </>
  );
}
