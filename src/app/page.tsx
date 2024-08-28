// Home.js or Home.tsx
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import Index from "../../pages/index";
import Hero from "../../components/hero";
import AboutUs from "../../components/aboutus";
import LearningMethods from "../../components/learningmethods";
import Courses from "../../components/courses";
import Feeds from "../../components/feeds";

export default function Home() {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
        <AboutUs />
        {/* <LearningMethods /> */}
        <Courses />
        <Feeds />
        <Footer />
      </section>
    </>
  );
}
