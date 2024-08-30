import React from 'react';

const Courses: React.FC = () => {
  return (
    <>
    <div className="lg:h-20 h-10 w-full bg-[#2dc865]"></div>
    <div className="flex items-center justify-center bg-black min-h-screen p-4">
      <div className="relative w-full max-w-8xl lg:mx-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Workshop Box */}
        <div className="flex items-center justify-center bg-[#e8a52f] text-white h-72 md:h-80 lg:h-96 w-full rounded-3xl shadow-lg">
          <div className="text-center p-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Workshops</h3>
            <p className='text-lg md:text-xl'>We do Workshops for all age groups for Learning Art.</p>
          </div>
        </div>
        {/* Co-Working Box */}
        <div className="flex items-center justify-center bg-[#e61f60] text-white h-72 md:h-80 lg:h-96 w-full rounded-3xl shadow-lg">
          <div className="text-center p-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Co-Working</h3>
            <p className='text-lg md:text-xl'>We Are Offering Artists to Collaborate With us.</p>
          </div>
        </div>
        {/* Design Consultancy Box */}
        <div className="flex items-center justify-center bg-[#2dc865] text-white h-72 md:h-80 lg:h-96 w-full rounded-3xl shadow-lg">
          <div className="text-center p-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Design Consultancy</h3>
            <p className='text-lg md:text-xl'>We help Designers in making portfolios and Placement Assistance.</p>
          </div>
        </div>
        {/* Art Promotion Box */}
        <div className="flex items-center justify-center bg-[#2eb5e8] text-white h-72 md:h-80 lg:h-96 w-full rounded-3xl shadow-lg">
          <div className="text-center p-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Art Promotion</h3>
            <p className='text-lg md:text-xl'>We do Exhibition and Promotion to showcase your work in Art Mela.</p>
          </div>
        </div>
        {/* Central Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full flex items-center justify-center shadow-lg p-4">
            <h3 className="text-center font-semibold text-xl md:text-3xl lg:text-4xl text-black">Short-term Courses</h3>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Courses;
