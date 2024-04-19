import RoomInfo from "./RoomInfo";
import RoomOpening from "./RoomOpening";
function Prestige() {
  const room = {
    type: "Prestige Room",
    size: "250",
    view: "Village View",
    guest: "6",
    bed: "3",
    bath: "3",
    price: "9000",
  };
  return (
    <div>
      <RoomOpening text="prestige" />
      <RoomInfo room={room} />
    </div>
  );
}

export default Prestige;
