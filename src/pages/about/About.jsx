import { useState } from "react";
import "./About.scss";
import bioData from "../../data/bioData.json";
import careerData from "../../data/careerData.json";
import aboutDate from "../../data/aboutData.json";
import TabsSection from "../TabsSection";

function About() {
  const [open, setOpen] = useState("about");
  const [openAbout, setOpenAbout] = useState(null);
  const [openBio, setOpenBio] = useState(null);
  const [openCareer, setOpenCareer] = useState(null);

  const switchTab = (tabName) => {
    setOpen(tabName);

    setOpenAbout(null);
    setOpenBio(null);
    setOpenCareer(null);
  };
  return (
    <div className="flexSpaceAlCenterColumn">
      <ul className="ul_tabs flexSpaceAlineCentr">
        <li>
          <button
            role="tab"
            aria-selected={open === "about"}
            onClick={() => switchTab("about")}
            className={`${open === "about" ? "active" : ""}  btn`}
          >
            Обо мне !
          </button>
        </li>
        <li>
          <button
            role="tab"
            aria-selected={open === "bio"}
            className={`${open === "bio" ? "active" : ""}  btn `}
            onClick={() => switchTab("bio")}
          >
            Биография{" "}
          </button>
        </li>
        <li>
          <button
            role="tab"
            aria-selected={open === "career"}
            className={`${open === "career" ? "active" : ""}  btn `}
            onClick={() => switchTab("career")}
          >
            {" "}
            Карьера{" "}
          </button>
        </li>
      </ul>

      {open === "about" && (
        <TabsSection
          openState={openAbout}
          setOpenState={setOpenAbout}
          date={aboutDate}
        />
      )}

      {open === "bio" && (
        <TabsSection
          openState={openBio}
          setOpenState={setOpenBio}
          date={bioData}
        />
      )}

      {open === "career" && (
        <TabsSection
          openState={openCareer}
          setOpenState={setOpenCareer}
          date={careerData}
        />
      )}
    </div>
  );
}

export default About;
