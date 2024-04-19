import RoomInfo from "./RoomInfo";
import RoomOpening from "./RoomOpening";
function Signature() {
  const room = {
    type: "Signature Room",
    size: "65",
    view: "Great Mountain View",
    guest: "4",
    bed: "2",
    bath: "1",
    price: "6000",
  };
  return (
    <div>
      <RoomOpening text="signature" />
      <RoomInfo room={room} />
    </div>
  );
}

export default Signature;
