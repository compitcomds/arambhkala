// Home.js or Home.tsx
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Index from "../../pages/index";

export default function Home() {
  return (
    <>
      <section>
        <Navbar></Navbar>
        <Index></Index>
        <Footer></Footer>
      </section>
    </>
  );
}
