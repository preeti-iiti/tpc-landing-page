import Carousel from "./components/carousel/carousel";
import PortalForm from "./components/portalform/portalform";
import Recruiters from "./components/recruiters/recruiters";
import Messages from "./components/messages/messages";

import CarouselData from "./components/carousel/carousel.json";
import RecruitersData from "./components/recruiters/ourrecruiters.json";

export default function Home() {
  return (
    <>
      <div className=" absolute top-0 h-[100vh]">
        <div className=" w-[4000px] h-[4000px] bg-sky-700 rounded-[500px] absolute left-[-500px] bottom-[40vh] rotate-[-10deg]"></div>
      </div>
      <div className="">
        <div className=" flex justify-start items-center ">
          <PortalForm />
          <Carousel {...CarouselData} />
        </div>
      </div>
      <Messages />
      <Recruiters {...RecruitersData} />
    </>
  );
}
