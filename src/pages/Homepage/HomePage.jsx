import Contact from "../../components/Contact";
import Activities from "./Activities";

import Essential from "./Essential";
import Heading from "./Heading";
import HomeFooter from "./HomeFooter";
import HomeSlider from "./HomeSlider";
import Hometag from "./Hometag";
// #DD871B
function HomePage() {
  return (
    <div>
      <Heading />
      <Hometag />
      <HomeSlider />
      <Essential />
      <Activities />
      <HomeFooter />
      <Contact className="lg:w-[600px]" />
    </div>
  );
}

export default HomePage;
