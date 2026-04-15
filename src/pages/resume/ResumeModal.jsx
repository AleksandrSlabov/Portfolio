import "./Resume.scss";
import { MdOutlineClose } from "react-icons/md";
function ResumModal({ setOpenCard, project, setOpenDesc }) {
  return (
    <div className="modalDesc-mini flexSpaceAlineCentr ">
      <h3>{project.title}</h3>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpenCard(null);
        }}
        className="btnClose"
      >
        <MdOutlineClose className="close" />
      </button>
      <div className=" contLinkMini flexSpaceAlCenterColumn">
        <p>{project.tech.join(", ")}</p>
        <a href={project.demo}>Демо версия </a>
        <a href={project.repo}>Репозиторий </a>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();

          setOpenDesc(true);
        }}
        className="btn btnDesc"
      >
        Подробнее
      </button>
    </div>
  );
}

export default ResumModal;
