import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Hometag() {
  useGSAP(() => {
    gsap.from("#Htag .tag,Mtag", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#Htag .tag",
        scroller: "body",
      },
    });
    gsap.from(".Mtag", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Htag .tag",
        scroller: "body",
      },
    });
  }, []);
  return (
    <div id="Htag" className="py-8 sm:py-20">
      <p className="text-center text-[#DC8421] font-bold text-lg pb-6">
        Culture meets modern Luxury
      </p>
      <p className="block sm:hidden text-center text-2xl transition-all mx-3 Mtag">
        CozyStay in Queen Of Hill known for its richness in culture and natural
        heritage and the most famous toy train that has been declared a UN
        heritage.
      </p>
      <div className="hidden sm:flex sm:flex-col sm:items-center text-[3vw] md:text-[2.5vw] transition-all">
        <p className="tag">
          CozyStay in Queen Of Hill known for its richness in culture and
          natural
        </p>
        <p className="tag">
          heritage and the most famous toy train that has been declared as UN
        </p>
        <p className="tag">heritage.</p>
      </div>
    </div>
  );
}

export default Hometag;
