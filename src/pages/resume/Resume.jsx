import "./Resume.scss";
import ResumModal from "./ResumeModal";
import ResumModalMaxSlider from "./ResumModalMaxSlider";
import { useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { MdOutlineClose } from "react-icons/md";
import projectData from "../../data/projectData.json";
import { useState } from "react";
import { Overlay } from "../../component/overlay/Overlay";

function Resume() {
  // const [activeIndex, setActiveIndex] = useState(0);
  const [openCard, setOpenCard] = useState(null);

  const [openDesc, setOpenDesc] = useState(null);

  useEffect(() => {
    if (openCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openCard]);

  return (
    <>
      <h2>Проекты </h2>
      <div className="conteiner__resume">
        {projectData.map((project) => (
          <article
            key={project.id}
            className={`${openCard === project.id ? "active" : ""} flexColumnCenterCentr `}
            onClick={(e) => {
              console.log("click");
              setOpenCard(project.id);
            }}
          >
            <img
              className="logoCardProduct"
              src={project.img}
              alt="logoProject"
            />
            <h3>{project.title}</h3>
            {openCard === project.id && (
              <Overlay
                onClick={(e) => {
                  setOpenCard(null);
                  setOpenDesc(null);
                }}
              >
                <ResumModal
                  setOpenCard={setOpenCard}
                  project={project}
                  setOpenDesc={setOpenDesc}
                />

                {openDesc && (
                  <ResumModalMaxSlider
                    setOpenCard={setOpenCard}
                    setOpenDesc={setOpenDesc}
                    project={project}
                  />
                )}
              </Overlay>
            )}
          </article>
        ))}
      </div>
    </>
  );
}

export default Resume;
