import About from "./components/About";
import Blog from "./components/Blog";
import Company from "./components/Company";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Maps from "./components/Maps";

export default function App() {
  return (
    <>
      <Header />
      <Hero />

      <Description />

      <Gallery />

      <Service />

      <About />

      <Company />

      <Blog />
      <Maps />
      <Footer />
    </>
  );
}
