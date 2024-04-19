import RoomInfo from "./RoomInfo";
import RoomOpening from "./RoomOpening";
function Double() {
  const room = {
    type: "Double Room",
    size: "25",
    view: "Partial View",
    guest: "2",
    bed: "2",
    bath: "1",
    price: "3000",
  };
  return (
    <div>
      <RoomOpening text="double" />
      <RoomInfo room={room} />
    </div>
  );
}

export default Double;
