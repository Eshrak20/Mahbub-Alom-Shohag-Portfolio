import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Education,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="absolute inset-0 bg-overlay-black"></div>{" "}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          <Tech />
          <div className="relative z-0">
            <StarsCanvas />
            <Experience />
          </div>
          <Works />

          <div className="relative z-0">
            <StarsCanvas />
            <Education />
          </div>
          <Feedbacks />
        </div>
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
