import FamilyAmenities from "../../components/FamilyAmenities";
import RoomAmenities from "../../components/RoomAmenities";
import RoomIncluded from "../../components/RoomIncluded";

import AnimationAmenities from "./AnimationAmenities";

function Amenities() {
  AnimationAmenities();
  return (
    <div id="Ramen">
      <div>
        <p className="text-2xl font-semibold Ftitle">
          Family-friendly Amenities
        </p>
        <FamilyAmenities />
      </div>
      <div>
        <p className="text-2xl font-semibold Rtitle">Room Amenities</p>
        <RoomAmenities />
      </div>
      <div>
        <p className="text-2xl font-semibold mb-4 Rsuite">
          What&apos;s included in this suite?
        </p>
        <RoomIncluded />
      </div>
    </div>
  );
}

export default Amenities;
