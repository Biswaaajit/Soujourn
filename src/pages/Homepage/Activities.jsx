import { useGSAP } from "@gsap/react";
import ActivitiesInfo from "../../components/ActivitiesInfo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
function Activities() {
  const activities = useRef();
  useGSAP(() => {
    var t1 = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: "#HActivities",
        start: "top 90%",
      },
    });
    t1.from("#head", {
      y: 80,
      opacity: 0,
      duration: 0.5,
    });
    t1.from("#Wtitle p,#Mtitle", {
      y: 80,
      opacity: 0,
      stagger: 0.2,
    });
    t1.from("#activity .activity", {
      scale: 0,
      stagger: 0.5,
      delay: 0.5,
    });
  });
  return (
    <div
      ref={activities}
      className="w-full h-fit px-4 sm:px-16 md:px-8 py-8 sm:py-10 transition-all"
      id="HActivities"
    >
      <p
        className="capitalize  text-center font-bold text-[#DD871B] text-xl pb-4 sm:pb-8"
        id="head"
      >
        Local Activities & Events
      </p>
      <div className="hidden sm:block pb-14" id="Wtitle">
        <p className="uppercase text-center text-3xl font-light">
          Immerse yourself in a diverse
        </p>
        <p className="uppercase text-center text-3xl font-light">
          Mountain Resort life
        </p>
      </div>
      <p
        className="block sm:hidden uppercase text-center text-3xl font-light pb-8"
        id="Mtitle"
      >
        Immerse youself in a diverse Mountain Resort life
      </p>
      <div
        className="space-y-12 md:space-y-0 block md:flex md:flex-row md:gap-4 transition-all"
        id="activity"
      >
        <ActivitiesInfo image="/spa.jfif" heading="Spa & Wellness">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus
        </ActivitiesInfo>

        <ActivitiesInfo image="/summer.jfif" heading="Summer Week">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus
        </ActivitiesInfo>
        <ActivitiesInfo image="/restaurant.jfif" heading="5-Star Restaurant">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus
        </ActivitiesInfo>
      </div>
    </div>
  );
}

export default Activities;
