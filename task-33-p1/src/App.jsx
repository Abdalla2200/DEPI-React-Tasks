import Footer from "./components/Footer";
import About from "./components/Home/About";
import Doctors from "./components/Home/Doctors";
import Header from "./components/Home/Header";
import Services from "./components/Home/Services";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Doctors />
      <Footer />
    </div>
  );
}
