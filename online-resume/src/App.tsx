import * as React from "react";
import "reset-css";
import "./App.css";
import FrontUi from "./components/header/front-ui";
import Header from "./components/header";
import Pdf from "./assests/resume.pdf";
import Particles from "react-particles-js";
import ContactUs from "./components/contactUs";

const navigation = {
  brand: { name: "Home", to: "/" },
  links: [
    { name: "About Me", to: "/about" },
    { name: "Resume", to: { Pdf } },
    {
      name: "Linked In",
      to: "https://www.linkedin.com/in/akansha-gupta-26125914a/",
    },
    { name: "Contact", to: "/contact" },
  ],
};
const particleConfig: any = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#b6b2b2",
      },
    },
    opacity: {
      value: 0.5211089197812949,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8.017060304327615,
      random: true,
      anim: {
        enable: true,
        speed: 12.181158184520175,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#c8c8c8",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "attract",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const resumeDate = {
  name: "Akansha",
  role: "Software Engineer",
  experience: "",
};
function App() {
  const { brand, links } = navigation;
  return (
    <>
      <Particles params={particleConfig} className="particles" />
      <div className="app_background">
        <Header brand={brand} links={links} />
        <FrontUi resumeDate={resumeDate} />
        {/* <About />
         */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
