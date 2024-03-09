import React from "react";
import FileSaver from "file-saver";
import LogoImage from "../utils/LOGO.jpg";

const downloadCV = () => {
  const cvFilePath = `${process.env.PUBLIC_URL}/Resume - Jenya Proviz.pdf`;
  FileSaver.saveAs(cvFilePath, "My_CV.pdf");
  console.log("Downloading CV...");
};

const AboutMePage = () => {
  return (
    <div className="max-w-[900px] mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-9">
        <div className="w-full md:w-1/3 ">
          <img
            className="img-fluid rounded-2xl w-40"
            src={LogoImage}
            alt="portfolio"
          />
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-2xl text-gray-300 font-bold mb-4">About Me</h2>
          <p className="text-gray-400 mb-4">
            Hi, I'am Jenya Proviz, a Full Stack Web Developer and experienced
            Industrial Engineer with a passion for technology and innovation.
            Holding a B.Sc. in Technology Management and boasting over 20 years
            in production planning, Jenya has seamlessly transitioned into the
            dynamic field of web development.
          </p>

          <p className="text-gray-400 mb-4">
            Completed a Full Stack Web Development program at HuckerU College
            (2022-2023), acquiring a diverse skill set, including React, Redux,
            HTML, CSS, Bootstrap, SASS, JavaScript, TypeScript, REST API, SQL
            (MySQL), MongoDB, Node.js, and more.
          </p>

          <p className="text-gray-400 mb-4">
            In the role of Production Planner at Mars Antennas and RF Systems,
            successfully managed supply chains, led teams, and optimized
            production processes. Experience includes transitioning products
            from development to production, cost analysis, and collaboration
            with international subcontractors, honing managerial and analytical
            skills.
          </p>

          <button
            className="bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded"
            onClick={downloadCV}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
