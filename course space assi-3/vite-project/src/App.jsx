// import { Home } from "lucide-react";
import Header from "./components/Header";
import Home from "./components/Home";
import Courses from "./components/Courses";
import LearningSection from "./components/LearningSection";
import Testimonial from "./components/Testimonial";
import Mentors from "./components/Mentors";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Home />
      <Courses />
      <Testimonial />
      <Mentors />
      <LearningSection />
      <SubscribeSection />
      <Footer />

    </>
  );
}

export default App;

