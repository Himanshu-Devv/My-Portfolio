import Skills from "../Component/Skills";
// import Navbar from "../Component/Navbar";
import Header from "../Component/Header";
import Project from "../Component/Projects";
// import Work from "../Component/Work";
import Image from "next/image";
import Services from "../Component/Services";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
// import Project from "../Component/Projects";

export default function Home() {
  return (
    <>
      <div className="App__container">
        <section id="Home">
          <Header />
        </section>
        <section id="Service">
          <Services />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Project">
          <Project />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}
