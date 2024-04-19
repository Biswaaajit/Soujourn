import { SlArrowDown } from "react-icons/sl";

/* eslint-disable react/prop-types */
function RoomNo({ dispatch, user }) {
  const { room, showRoom } = user;
  return (
    <div className="w-[90vw] sm:w-[70vw] xl:w-[30vw]">
      <div
        onClick={() => dispatch({ type: "showroom" })}
        className=" flex justify-between px-4 py-4 border-[3px] border-[#dc8409] rounded-md"
      >
        <label className="text-lg">Room</label>
        <p className="flex items-center text-lg gap-3">
          <span>{room}</span>
          <span>Room</span>
          <SlArrowDown size="15px" />
        </p>
      </div>
      {showRoom && (
        <div className="flex bg-yellow-500/40 py-3 justify-around mt-1 rounded-md border-2 border-zinc-600/50">
          <p className="text-xl font-semibold">Room</p>
          <div className="flex items-center gap-4">
            <button
              className="font-semibold text-[20px]"
              onClick={() => dispatch({ type: "subroom" })}
            >
              ➖
            </button>
            <p className="text-xl">{room}</p>
            <button
              className="font-semibold text-[18px]"
              onClick={() => dispatch({ type: "addroom" })}
            >
              ➕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomNo;
