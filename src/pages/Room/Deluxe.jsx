import RoomInfo from "./RoomInfo";
import RoomOpening from "./RoomOpening";
function Deluxe() {
  const room = {
    type: "Deluxe Room",
    size: "35",
    view: "Village View",
    guest: "2",
    bed: "1",
    bath: "1",
    price: "2000",
  };
  return (
    <div>
      <RoomOpening text="deluxe" />
      <RoomInfo room={room} />
    </div>
  );
}

export default Deluxe;
