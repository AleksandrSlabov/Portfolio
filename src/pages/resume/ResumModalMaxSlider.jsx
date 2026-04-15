import "./Resume.scss";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ResumModalMaxSlider({ setOpenCard, setOpenDesc, project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openTeh, setOpenTeh] = useState(null);
  return (
    <div className="modalMax flexColumn">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpenCard(null);
          setOpenDesc(null);
        }}
        className="btnCloseTeh"
      >
        <MdOutlineClose className="close" />
      </button>
      <h3>{project.title}</h3>
      <div className="contSlider">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveIndex(
              (prev) =>
                (prev - 1 + project.screen.length) % project.screen.length,
            );
          }}
          className="prevSlide"
        >
          <FaArrowLeft className="iconPrev" />
        </button>
        {project.screen.map((el, index) => (
          <img
            loading="lazy"
            key={`slide${index}`}
            className={`${index === activeIndex ? "active" : ""}`}
            src={el}
            alt={`slide ${index + 1}`}
          />
        ))}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveIndex((prev) => (prev + 1) % project.screen.length);
          }}
          className="nextSlide"
        >
          {" "}
          <FaArrowRight className="iconNext" />
        </button>
      </div>
      <div className="contBadges">
        <ul>
          {project.tech.map((el, index) => (
            <li key={`tech${index}`}>{el}</li>
          ))}
        </ul>
      </div>
      <div className="contLink flexColumn">
        <a href={project.demo}>Демо версия</a>
        <a href={project.repo}>репозиторий </a>
      </div>
      <p className="descProject">{project.description}</p>
      <button
        className={`${openTeh === true && "active"} btnTeh`}
        onClick={(e) => {
          e.stopPropagation();
          setOpenTeh(openTeh === true ? null : true);
        }}
      >
        Подробнее о технологиях
      </button>

      {openTeh && (
        <ul className="listTeh flexColumn">
          <li className="flexColumn">
            <h3>Frontend:</h3>
            <ul className="flexColumn">
              {project.stack.frontend.map((el, index) => (
                <li className="flexColumn" key={`front${index}`}>
                  {el}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Backend:</h3>
            <ul>
              {project.stack.backend.map((el, index) => (
                <li key={`back${index}`}>{el}</li>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ResumModalMaxSlider;
