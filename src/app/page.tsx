import Carousel from "./components/carousel/carousel";
import PortalForm from "./components/portalform/portalform";
import Recruiters from "./components/recruiters/recruiters";
import Messages from "./components/messages/messages";

import CarouselData from "./components/carousel/carousel.json";
import RecruitersData from "./components/recruiters/ourrecruiters.json";

export default function Home() {
  return (
    <>
      <Carousel {...CarouselData} />
      <PortalForm />
      <Messages />
      <Recruiters {...RecruitersData} />
    </>
  );
}
