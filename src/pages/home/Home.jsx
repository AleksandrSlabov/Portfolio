import logoHome from "../../../public/logoHome.jpg";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const tech = [
    "REACT",
    "Java Script",
    "CSS/SCSS",
    "HTML",
    "Node.js",
    "Vite",
    "Vercel",
    "Git",
  ];
  return (
    <section className="SecHome flexSpaceAlCenterColumn">
      <h2>Привет, я Александр!</h2>
      <img className="imgLogoHome" src={logoHome} alt="" />
      <div className="contTech">
        {tech.map((el, index) => (
          <span key={index}>{el}</span>
        ))}
      </div>
      <h2>Напиши мне !</h2>
      <button
        onClick={() => {
          navigate("/contact");
        }}
        className="btn flexCenterCenter blinkButton "
      >
        Связаться{" "}
      </button>
    </section>
  );
}

export default Home;
