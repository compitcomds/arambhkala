import React from 'react';

const LearningMethods: React.FC = () => {
  return (
    <>
    <div className="relative w-full h-screen bg-black text-white flex items-center justify-center p-10">
      {/* Circular Diagram */}
      <div className="absolute left-10 top-10">
        <div className="relative w-64 h-64 bg-transparent rounded-full flex items-center justify-center">
          <div className="absolute w-[100%] h-[100%] border-8 border-gray-300 rounded-full"></div>
          <div className="absolute w-[50%] h-[50%] border-8 border-orange-500 rounded-full"></div>
          <div className="absolute w-[70%] h-[70%] border-8 border-blue-500 rounded-full flex items-center justify-center">
            <div className="w-[50%] h-[50%] border-8 border-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">कृति</span>
            </div>
          </div>
          <div className="absolute top-4 left-2/3 text-orange-500 font-bold">चित</div>
          <div className="absolute bottom-4 right-2/3 text-blue-500 font-bold">चलचित्र</div>
          <div className="absolute top-2/3 left-2 text-pink-500 font-bold">कला</div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="ml-[350px] mt-10">
        <h2 className="text-xl font-bold text-yellow-500">LEARNING METHODS</h2>
        <div className="mt-8">
          <div className="flex items-start mb-6">
            <span className="text-yellow-500 text-lg font-bold">Step 1</span>
            <p className="ml-4">
              A thought is a fleeting whisper of the mind, shaping the contours of our reality.
            </p>
          </div>
          <div className="flex items-start mb-6">
            <span className="text-pink-500 text-lg font-bold">Step 2</span>
            <p className="ml-4">
              Artwork design infused with creativity captures the essence of imagination, transforming blank spaces into vibrant expressions that stir the senses and inspire awe.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-500 text-lg font-bold">Step 3</span>
            <p className="ml-4">
              Motion art seamlessly blends visual elements with movement, creating an immersive experience that dances across the screen, captivating audiences with its dynamic allure.
            </p>
          </div>
        </div>
      </div>

      {/* Character Illustration */}
      <div className="absolute bottom-0 right-10">
        <img src="/path-to-character.png" alt="Character" className="w-72" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-16">
        <img src="/path-to-eye.png" alt="Eye" className="w-16" />
      </div>
      <div className="absolute top-20 right-32">
        <img src="/path-to-brush.png" alt="Brush" className="w-8" />
      </div>
      <div className="absolute bottom-10 left-16">
        <img src="/path-to-star.png" alt="Star" className="w-12" />
      </div>
    </div>
    </>
  );
};

export default LearningMethods;
