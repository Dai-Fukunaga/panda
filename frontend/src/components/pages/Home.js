import "../../App.css";
import { NavBar } from "../organisms/NavBar.js"
import Slider from "react-slick";

import haikei from "../../img/haikei.png"
import panda_amechan from "../../img/panda_amechan.gif"
import sasa from "../../img/sasa.png"
import sasa_golden from "../../img/sasa_golden.png"
import next_arrow from "../../img/icon/next.png"
import prev_arrow from "../../img/icon/prev.png"

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundImage:`url(${next_arrow})`, width:"48px", height: "48px", right: "20px"}}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundImage:`url(${prev_arrow})`, width:"48px", height: "48px", left:"20px"}}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

function Home() {
  return (
    <div className="App">
      <div className="h-screen w-screen relative" style={{backgroundImage:`url(${haikei})`, backgroundRepeat: 'no-repeat'}}>
        <NavBar />
        <img className="absolute z-10 top-1/4 left-auto" src={panda_amechan} alt="panda" />

          <Slider className="top-3/4 left-1/8" {...settings}>
            <div>
              <button className="inset-y-2/3 inset-x-1/4 h-12 w-48 overflow-hidden rounded-2xl bg-base text-lg font-bold text-main">
                <div className="flex w-full">
                  <img className="w-11" src={sasa_golden} alt="sasa" />
                  <p className="relative top-2 w-full">いい笹をあげる</p>
                </div>
              </button>
            </div>

            <div>
              <button className="inset-y-2/3 inset-x-1/4 h-12 w-48 overflow-hidden rounded-2xl bg-base text-lg font-bold text-main">
                <div className="flex w-full">
                  <img className="w-11" src={sasa} alt="sasa" />
                  <p className="relative top-2 w-full">笹をあげる</p>
                </div>
              </button>
            </div>
          </Slider>

      </div>
    </div>
  );
}

export default Home;