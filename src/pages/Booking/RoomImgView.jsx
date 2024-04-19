import { useState } from "react";
import RoomIcon from "./RoomIcon";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const images = [
  {
    id: 0,
    data: "/doubleRoom.jpg",
    name: "Double Room",
    space: 25,
    guest: 2,
    bed: 2,
    bathroom: 1,
    rate: 3000,
  },
  {
    id: 1,
    data: "/deluxRoom.jpg",
    name: "Deluxe Room",
    space: 35,
    bed: 1,
    bathroom: 1,
    rate: 2000,
    guest: 2,
  },
  {
    id: 2,
    data: "/prestigeRoom.jpg",
    name: "Prestige Room",
    rate: 9000,
    space: 250,
    guest: 6,
    bed: 3,
    bathroom: 3,
  },
  {
    id: 3,
    data: "/signatureRoom.jpg",
    name: "Signature Room",
    rate: 6000,
    space: 65,
    guest: 4,
    bed: 2,
    bathroom: 1,
  },
];
function RoomImgView() {
  const [view, setView] = useState(images[1]);
  const navigate = useNavigate();
  useGSAP(() => {
    var t1 = gsap.timeline({
      delay: 0.3,
      scrollTrigger: {
        trigger: "#RView",
      },
    });
    t1.from("#RView .img", {
      y: 850,
      ease: "slow",
    });
    t1.from("#RView .imgCap", {
      scale: 1.5,
      opacity: 0,
    });
    t1.from("#RView .imgFlow", {
      scale: 1.5,
      opacity: 0,
    });
  });
  function handleImage(i) {
    const image = images.filter((image) => image.id === i);
    console.log(image[0]);
    setView(image[0]);
  }
  function handleRoom() {
    if (view.id === 1) {
      navigate("/deluxe");
    }
    if (view.id === 0) navigate("/double");
    if (view.id === 2) navigate("/prestige");
    if (view.id === 3) navigate("/signature");
  }
  return (
    <div id="RView">
      {view && (
        <div
          className="relative max-w-full h-full md:h-[70vh] md:w-[70vw] mx-2 my-4 md:mx-auto transition-all overflow-hidden"
          onClick={handleRoom}
        >
          <img src={view.data} className="w-full  h-full img" />
          <div className="absolute w-full h-full top-0 bg-black/40 imgCap">
            <p className="relative left-2 top-2 w-fit border-2 border-heading/30 bg-heading/20 text-white px-1.5 py-1 hover:bg-heading/50">
              FROM ₹{view.rate}
            </p>
            <div className="w-fit mx-auto relative top-[50%] -translate-y-1/2 text-white ">
              <p className="text-center font-semibold text-lg pb-2 md:text-2xl">
                {view.name}
              </p>
              <RoomIcon view={view} />
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-row  justify-center gap-2 imgFlow">
        {images.map((img) => (
          <img
            src={img.data}
            key={img.id}
            onClick={() => handleImage(img.id)}
            className={`w-[20vw] sm:w-[15vw] md:w-[10vw] transition-all ${
              view?.id === img.id ? "grayscale-0" : "grayscale brightness-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default RoomImgView;
