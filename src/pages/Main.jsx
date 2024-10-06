import Navbar from "../features/main/Navbar";
import Blogs from "../features/main/Blogs";
import Contact from "../features/main/Contact";
import Footer from "../features/main/Footer";
import Header from "../features/main/Header";
import Features from "../features/main/Features";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
