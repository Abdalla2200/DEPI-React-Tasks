import About from "./components/Home/About";
import Age from "./components/Home/Age";
import Application from "./components/Home/Application";
import Device from "./components/Home/Device";
import Download from "./components/Home/Download";
import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Device />
      <Age />
      <Download />
      <Application />
      <Footer />
    </div>
  );
}

export default App;
