import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Resume from "../../pages/resume/Resume";

import "./MainContent.scss";
import Contact from "../../pages/contacts/Contact";

function MainContent() {
  return (
    <main className="flexColumnCenterCentr">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
export default MainContent;
