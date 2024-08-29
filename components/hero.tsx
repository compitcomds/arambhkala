import { FC } from "react";

const Hero: FC = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-black overflow-hidden">
        {/* Animated Stars */}
        {/* Animated Stars */}
        <div className="absolute top-0 left-0 w-full h-full mt-10">
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "10%", left: "15%", animationDuration: "2s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "20%", left: "25%", animationDuration: "2.5s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "30%", left: "60%", animationDuration: "3s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "50%", left: "70%", animationDuration: "3.5s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "10%", left: "80%", animationDuration: "4s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "60%", left: "90%", animationDuration: "4.5s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "70%", left: "20%", animationDuration: "5s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "80%", left: "40%", animationDuration: "5.5s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "90%", left: "50%", animationDuration: "6s" }}
          ></div>
        </div>

        {/* Cloud Container */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            {[...Array(10)].map((_, i) => (
              <div className="cloud top-cloud" key={i}>
                <img
                  src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/2.png"
                  alt="Cloud"
                  className="w-32 h-16"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center items-center w-full h-full relative z-10 text-center">
          <div>
            <div className="w-80 rounded-full flex items-center justify-center shadow-[0_0_20px_5px_rgba(252,211,77,0.6)]">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/arambhakala-logo.png"
                alt="Aramhkala Foundation Logo"
                className="z-50"
              />
            </div>

            <h1 className="text-white text-2xl mt-4 font-bold">ARAMBHKALA FOUNDATION</h1>
            <p className="text-white text-lg">House Of Arts & Technology</p>
          </div>
        </div>

        {/* Additional Clouds */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            {[...Array(10)].map((_, i) => (
              <div className="cloud bottom-cloud" key={i}>
                <img
                  src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/3.png"
                  alt="Cloud"
                  className="w-32 h-16 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
