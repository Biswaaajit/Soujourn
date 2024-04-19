import Contact from "../../components/Contact";
import RoomFeedback from "./RoomFeedback";
import RoomImgView from "./RoomImgView";
import RoomInfo from "./RoomInfo";
import RoomServices from "./RoomServices";

function RoomBooking() {
  return (
    <div>
      <RoomInfo />
      <RoomImgView />
      <RoomServices />
      <RoomFeedback />
      <Contact className="lg:w-[36vw]" />
    </div>
  );
}

export default RoomBooking;
