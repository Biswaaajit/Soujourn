/* eslint-disable react/prop-types */
import RoomForm from "../../components/RoomForm";
import RoomAbout from "./RoomAbout";
import Amenities from "./Amenities";
import Contact from "../../components/Contact";

function RoomInfo({ room }) {
  const { price } = room;
  return (
    <>
      <div className="block px-4 xl:px-[2vw] xl:flex gap-0 xl:gap-4">
        <div className="pb-8">
          <RoomAbout room={room} />
          <Amenities />
        </div>
        <div>
          <RoomForm price={price} />
        </div>
      </div>
      <Contact className="lg:w-[40vw]" size="xl:justify-between xl:px-2" />
    </>
  );
}

export default RoomInfo;
