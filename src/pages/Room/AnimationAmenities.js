import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
function AnimationAmenities() {
  useGSAP(() => {
    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#Ramen",
        start: "top 80%",
        end: "top 5%",
        scrub: 4,
      },
    });
    t1.from("#Ramen .Ftitle", {
      y: 80,
      opacity: 0,
    });
    t1.from(".Famen div", {
      x: 50,
      opacity: 0,
      stagger: 0.1,
    });
    t1.from(".Rtitle", {
      y: 80,
      opacity: 0,
    });
    t1.from("#Ramen .amen div", {
      x: 50,
      opacity: 0,
      stagger: 0.1,
    });
    t1.from("#Ramen .Rsuite", {
      y: 80,
      opacity: 0,
    });
    t1.from("#Ramen .Rinclude li", {
      x: 50,
      opacity: 0,
      stagger: 0.1,
    });
  }, []);
}

export default AnimationAmenities;
