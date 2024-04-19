/* eslint-disable react/prop-types */
import { useReducer } from "react";
import RoomNo from "../pages/Room/Form/RoomNo";
import FormCalender from "./FormCalender";
import AdultNo from "../pages/Room/Form/AdultNo";
import ChildNo from "../pages/Room/Form/ChildNo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import CLean from "../pages/Room/Form/CLean";
const initial = {
  room: 1,
  adult: 1,
  child: 0,
  showRoom: false,
  showAdult: false,
  showChild: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "showroom":
      return {
        ...state,
        showRoom: !state.showRoom,
        showAdult: false,
        showChild: false,
      };
    case "addroom":
      return { ...state, room: state.room + 1 };
    case "subroom":
      return { ...state, room: state.room < 2 ? state.room : state.room - 1 };
    case "addadult":
      return { ...state, adult: state.adult + 1 };
    case "subadult":
      return {
        ...state,
        adult: state.adult < 2 ? state.adult : state.adult - 1,
      };
    case "showadult":
      return {
        ...state,
        showAdult: !state.showAdult,
        showRoom: false,
        showChild: false,
      };
    case "showchild":
      return {
        ...state,
        showChild: !state.showChild,
        showAdult: false,
        showRoom: false,
      };
    case "addchild":
      return { ...state, child: state.child + 1 };
    case "subchild":
      return {
        ...state,
        child: state.child < 1 ? state.child : state.child - 1,
      };
  }
}
function RoomForm({ price }) {
  const [user, dispatch] = useReducer(reducer, initial);
  const { room } = user;
  useGSAP(() => {
    gsap.from("#Rform", {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Rform",
        scroller: "body",
      },
    });
  });
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <div
      className="py-8 w-full sm:w-fit mx-0 sm:mx-auto  my-8 xl:my-10 shadow-[0px_0px_60px_-30px_rgba(0,0,0,0.3)]"
      id="Rform"
    >
      <form
        onSubmit={handleForm}
        className="w-full sm:w-[80vw] xl:w-[35vw]  flex flex-col items-center gap-6 pb-6 "
      >
        <div className="w-[90vw] sm:w-[70vw] xl:w-[30vw] flex justify-between items-center px-2 pt-3">
          <span className="text-2xl font-medium">Reserve</span>
          <p className="text-sm space-x-2">
            <span>from</span>
            <span className="text-lg font-semibold">${price}</span>
            <span>/</span>
            <span>night</span>
          </p>
        </div>
        <FormCalender label="Check In" />
        <FormCalender label="Check Out" />
        <RoomNo user={user} dispatch={dispatch} />
        <div className="flex gap-[2%] w-[90vw] sm:w-[70vw] xl:w-[30vw]">
          <AdultNo user={user} dispatch={dispatch} />
          <ChildNo user={user} dispatch={dispatch} />
        </div>
        <div className="w-[98%] h-[2px] bg-yellow-600"></div>
        <div className="w-[full] flex flex-col items-center">
          <div className=" w-[90vw] sm:w-[70vw] px-3 xl:px-0 xl:w-[30vw] flex justify-between text-xl font-semibold">
            <p>Total Cost</p>
            <p>₹{price * room}</p>
          </div>
          <button className=" w-[70%] mt-8 text-[#dc8409] bg-zinc-900 py-2 font-semibold text-lg rounded-md">
            Book Your Stay Now
          </button>
        </div>

        {/* <p>Extra Services</p>
        <CLean /> */}
      </form>
    </div>
  );
}

export default RoomForm;
