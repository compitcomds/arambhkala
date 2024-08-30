import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 lg:px-44 my-6 space-y-2">
        <h3 className="text-3xl lg:text-5xl text-white uppercase">
          Learning Methods
        </h3>
        <div className="lg:w-1/2 w-full bg-yellow-400 h-1 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:hidden my-4 align-middle">
        <div className="flex flex-col space-y-5 border p-4">
          <div className="flex items-center justify-center bg-[#f88e2d] h-44 rounded-2xl text-4xl text-black font-bold">
            चित्त{" "}
          </div>
          <h3 className="text-3xl">Step 1</h3>
          <p className="text-">
            A thought is a fleeting whisper of the mind, shaping the contours of
            our reality.
          </p>
        </div>
        <div className="flex flex-col space-y-5 border p-4">
          <div className="flex items-center justify-center bg-[#f51b68] h-44 rounded-2xl text-4xl text-white font-bold">
            कला कृति
          </div>
          <h3 className="text-3xl">Step 2</h3>
          <p className="text-">
            Artwork design infused with creativity captures the essence of
            imagination, transforming blank spaces into vibrant expressions that
            stir the senses and inspire awe.
          </p>
        </div>
        <div className="flex flex-col space-y-5 border p-4">
          <div className="flex items-center justify-center bg-[#30d3ec] h-44 rounded-2xl text-4xl text-black font-bold">
            चलचित्र
          </div>
          <h3 className="text-3xl">Step 3</h3>
          <p className="text-">
            Motion art seamlessly blends visual elements with movement, creating
            an immersive experience that dances across the screen, captivating
            audiences with its dynamic allure.
          </p>
        </div>
      </div>
      <div className="bg-black text-white min-h-screen  w-full relative overflow-hidden hidden lg:block">
        {/* Circular Diagram and Text Steps */}
        <div className="flex flex-col lg:flex-row w-full items-center md:w-1/2 z-50">
          {/* Left Side: Circular Diagram */}
          <div className="w-[1300px] h-full z-50">
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/chakra.webp"
              alt=""
              className=" object-contain w-full h-full z-50"
            />
          </div>

          {/* Right Side: Text Steps */}
          <div className="space-y-16 mt-8 lg:mt-0 text-lg -ml-16 z-50">
            <div className="space-y-2">
              <h3 className="text-yellow-300 text-4xl">Step 1</h3>
              <p className="text-2xl z-50">
                A thought is a fleeting whisper of the mind, shaping the
                contours of our reality.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-pink-500 text-4xl">Step 2</h3>
              <p className="text-2xl z-50">
                Artwork design infused with creativity captures the essence of
                imagination, transforming blank spaces into vibrant expressions
                that stir the senses and inspire awe.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-blue-400 text-4xl">Step 3</h3>
              <p className="text-2xl z-50">
                Motion art seamlessly blends visual elements with movement,
                creating an immersive experience that dances across the screen,
                captivating audiences with its dynamic allure.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Character and Background Elements */}
        <div className="absolute inset-y-0 right-0 flex items-center w-full">
          <div className="relative w-full h-full">
            {/* Character Image */}
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/illu2%20(1).webp" // Replace with your character image URL
              alt="Character"
              className="absolute bottom-0 right-32 w-1/3 z-50"
            />

            {/* Stars and Clouds */}
            <div className="absolute top-24 right-36 w-28 h-28 z-50">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://ccdstest.b-cdn.net/Arambhakala/Eye.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="absolute top-5 right-[600px] w-16 h-16 z-50 animate-twinkle">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/st1%20(1).webp"
                alt="Star"
                className="animate-pulse"
              />
            </div>
            <div className="absolute top-20 right-10 w-14 h-14 z-50 animate-twinkle">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/st1%20(1).webp"
                alt="Star"
                className="animate-pulse"
              />
            </div>
            <div className="absolute top-32 right-[600px] w-28 h-28 z-50">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://ccdstest.b-cdn.net/Arambhakala/Tube%202.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute top-10 right-96 w-16 h-16 z-50 animate-twinkle">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/st1%20(1).webp"
                alt="Star"
              />
            </div>
            <div className="absolute top-44 right-24 w-12 h-12 z-50 animate-twinkle">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/st1%20(1).webp"
                alt="Star"
              />
            </div>
            <div className="absolute bottom-36 right-[700px] w-12 h-12 z-50 animate-twinkle">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/st1%20(1).webp"
                alt="Star"
              />
            </div>
            <div className="absolute bottom-60 right-[600px] w-28 h-28 z-50">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://ccdstest.b-cdn.net/Arambhakala/Tube%201.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* clouds */}
          <div className="absolute bottom-20 right-16 w-1/2 opacity-80 animate-moveClouds ">
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/c1.webp"
              alt="Cloud"
              className="w-56 "
            />
          </div>
          <div className="absolute top-0 right-56 w-1/2 opacity-80 animate-moveClouds ">
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/c1.webp"
              alt="Cloud"
              className="w-56 "
            />
          </div>
          <div className="absolute bottom-[350px] right-32 w-1/2 opacity-80 animate-moveClouds ">
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/c1.webp"
              alt="Cloud"
              className="w-56 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
