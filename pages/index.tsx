// import Hero from "../../components/hero";
import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import LearningMethods from "../components/learningmethods";
import Courses from "../components/courses";
import Feeds from "../components/feeds";
 
export default function Index() {
  return (
    <>
      <section>
        {/* <Hero></Hero> */}
        <Hero />
        <AboutUs />
        {/* <LearningMethods /> */}
        <Courses />
        <Feeds />
      </section>
    </>
  );
}
