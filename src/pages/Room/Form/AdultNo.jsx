/* eslint-disable react/prop-types */
import { SlArrowDown } from "react-icons/sl";
function AdultNo({ user, dispatch }) {
  const { adult, showAdult } = user;
  return (
    <div className="w-[49%]">
      <div
        className="flex  justify-between text-lg px-3 py-3 border-[3px] border-[#dc8409] rounded-md"
        onClick={() => dispatch({ type: "showadult" })}
      >
        <p>Adult</p>
        <p className="flex items-center gap-2">
          <span>{adult}</span>

          <SlArrowDown size="15px" />
        </p>
      </div>
      {showAdult && (
        <div className="flex justify-around py-3 bg-yellow-600/40 mt-2 rounded-md border-2 border-zinc-600/50">
          <button onClick={() => dispatch({ type: "subadult" })}>➖</button>
          <p className="font-semibold text-xl ">{adult}</p>
          <button onClick={() => dispatch({ type: "addadult" })}>➕</button>
        </div>
      )}
    </div>
  );
}

export default AdultNo;
