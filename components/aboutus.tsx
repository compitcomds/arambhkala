import React, { FC } from "react";

const AboutUs: FC = () => {
  return (
    <>
      <section className="bg-black text-white flex flex-col md:flex-row items-center px-4 space-y-10 relative">
        <div className="w-full md:w-3/6 flex flex-col justify-center lg:pl-10">
          <h2 className="text-[#7036db] text-3xl lg:text-6xl font-bold mb-4">About Us</h2>
          <p className="text-lg lg:text-2xl font-bold ">
            At Arambhakala Foundation, we believe in igniting creativity,
            nurturing talent, and sculpting futures. We are a passionate team
            dedicated to revolutionizing the landscape of skill development in
            the design industry. Our mission is to empower individuals of all
            ages with the knowledge, tools, and opportunities they need to
            thrive in the dynamic world of design.
          </p>
        </div>
        <div className="w-full md:w-4/6 flex justify-end items-center ">
          <img
            src="https://ccdstest.b-cdn.net/Arambhakala/illust1.webp"
            alt="Design Illustration"
            className="w-5/6 -mt-8 md:-mt-16 lg:-mt-[99px]"
          />
        </div>
      </section>
      <div className="h-20 w-full bg-[#7036db]"></div>
    </>
  );
};

export default AboutUs;
