/* eslint-disable react/prop-types */
import { FiMaximize2 } from "react-icons/fi";
import { PiUsersFill } from "react-icons/pi";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
function RoomAbout({ room }) {
  const { type, size, view, guest, bed, bath } = room;
  useGSAP(() => {
    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#Rabout",
        start: "top 70%",
      },
    });
    t1.from("#Rabout .type", {
      y: 80,
      opacity: 0,
      stagger: 0.2,
    });
    t1.from("#Rabout #icon div", {
      x: 40,
      opacity: 0,
      stagger: 0.1,
    });
    t1.from("#Rabout .para p", {
      y: 80,
      opacity: 0,
      stagger: 0.1,
    });
  });
  return (
    <div className="py-8" id="Rabout">
      <p className="text-3xl font-bold pb-4 type">{type}</p>
      <p className="text-heading font-semibold pb-5 type">
        {size}m<sup>2</sup>
        <span className="px-2">/</span>
        {view}
        <span className="px-2">/</span>
        {guest} Guest
      </p>
      <Icon guest={guest} bed={bed} bath={bath} size={size} />
      <div className="pt-6 space-y-3 para">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
    </div>
  );
}
function Icon({ size, guest, bed, bath }) {
  return (
    <div className="flex flex-row flex-wrap gap-6 items-center " id="icon">
      <div className="flex gap-2">
        <div className="border-2 border-black w-fit p-[1.5px]">
          <FiMaximize2 />
        </div>
        <p>
          {size}m<sup>2</sup>
        </p>
      </div>
      <div className="flex gap-2">
        <PiUsersFill size="25px" />
        <p>{guest} Guest</p>
      </div>
      <div className="flex gap-2">
        <IoBed size="22px" />
        <p>{bed} Beds</p>
      </div>
      <div className="flex gap-2">
        <FaBath size="20px" />
        <p>{bath} Bathroom</p>
      </div>
    </div>
  );
}
export default RoomAbout;
