/* eslint-disable react/prop-types */
import "./Compo.css";
function StayOption({ img, text, handleStay, no }) {
  return (
    <div
      className=" w-[23vw] h-[75%] flex flex-col justify-between items-center cursor-pointer cont"
      onClick={() => handleStay(no)}
    >
      <div className="overflow-hidden w-[90%] h-[80%]">
        <img src={img} className="w-full h-full transition-all" />
      </div>
      <p className="text-center text-slate-100 text-lg font-semibold">{text}</p>
    </div>
  );
}

export default StayOption;
