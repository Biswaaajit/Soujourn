import EssentialInfo from "../../components/EssentialInfo";
import { FaWifi } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaSwimmer } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Essential() {
  const Essential = useRef(null);
  useGSAP(
    () => {
      var t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#essential",
        },
      });
      t1.from("#head", {
        y: 80,
        opacity: 0,
        duration: 0.3,
      });
      t1.from("#title", {
        y: 80,
        opacity: 0,
        duration: 0.3,
      });
      t1.from("#item .item", {
        y: 80,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
      });
      t1.from(".img", {
        scale: 0,
        stagger: 0.3,
      });
    },
    { scope: Essential }
  );
  return (
    <div
      ref={Essential}
      className="w-full  h-fit flex flex-row flex-wrap lg:flex-nowrap my-20 transition-all"
    >
      <div
        className="flex-grow sm:flex-grow-0 lg:w-[50%] mx-4 sm:mx-3 lg:mx-6 xl:mx-10"
        id="essential"
      >
        <h3 className="font-bold text-[#DC8409] mb-3 text-lg" id="head">
          Discover the services we provide
        </h3>
        <h1 className="text-[50px] font-light mb-6" id="title">
          The Essentials
        </h1>
        <div
          className="block sm:flex sm:flex-row sm:flex-wrap sm:mx-3"
          id="item"
        >
          <EssentialInfo
            icon={<FaWifi size="35px" color="#DC8409" />}
            heading="Wifi & Internet"
          >
            Enjoy free top speed internet throughout your stay with us.
          </EssentialInfo>
          <EssentialInfo
            icon={<FaTaxi size="35px" color="#DC8409" />}
            heading="Pick Up Services"
          >
            Pick up and dropping off services from railway station or bus stand
          </EssentialInfo>
          <EssentialInfo
            icon={<FaUserTie size="35px" color="#DC8409" />}
            heading="Houskeeping Services"
          >
            We have staffs available 24/7 for your needs throughout your stay.
          </EssentialInfo>
          <EssentialInfo
            heading="Laundry Services"
            icon={<MdLocalLaundryService size="35px" color="#DC8409" />}
          >
            We provide laundry services free of any charges to our guests.
          </EssentialInfo>
          <EssentialInfo
            heading="Food Services"
            icon={<MdOutlineFoodBank size="35px" color="#DC8409" />}
          >
            We provide breakfast, dinner and snacks service in our cafeteria or
            also in rooms.
          </EssentialInfo>
          <EssentialInfo
            heading="Swimming Pool"
            icon={<FaSwimmer size="35px" color="#DC8409" />}
          >
            We have temperature controlled swimming pool with beautiful scenic
            view around it.
          </EssentialInfo>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 lg:gap-6 flex-grow justify-center mt-4 lg:mt-0">
        <img
          className="w-[28vw] sm:w-[29vmax] lg:w-[15rem] img"
          src="/table1.jfif"
        />
        <img
          className="w-[27vw] sm:w-[28vmax] lg:w-[13rem] img"
          src="/Mountain pools.jfif"
        />
      </div>
    </div>
  );
}

export default Essential;
