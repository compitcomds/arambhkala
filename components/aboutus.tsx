import React, { FC } from "react";

const AboutUs: FC = () => {
  return (
    <>
      <section className="bg-black text-white flex flex-col md:flex-row items-center px-8 relative">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-[#7036db] text-2xl lg:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg lg:text-xl font-semibold tracking-[0.1em] leading-4">
            At Arambhakala Foundation, we believe in igniting creativity,
            nurturing talent, and sculpting futures. We are a passionate team
            dedicated to revolutionizing the landscape of skill development in
            the design industry. Our mission is to empower individuals of all
            ages with the knowledge, tools, and opportunities they need to
            thrive in the dynamic world of design.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center px-8">
          <img
            src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/compressed/illu%201.webp"
            alt="Design Illustration"
            className="w-full h-auto -mt-8 md:-mt-16 lg:-mt-[99px]"
          />
        </div>
      </section>
      <div className="h-20 w-full bg-[#7036db]"></div>
    </>
  );
};

export default AboutUs;
