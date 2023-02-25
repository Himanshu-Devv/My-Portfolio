import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import { motion } from "framer-motion";

const Projects = () => {
  const query = `*[_type == "projects"]`;
  const [projects, setProjects] = useState();
  const [toggle, setToggle] = useState("Clone");

  const container = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: 0.2,
        // staggerChildren: 0.2,
        duration: 0.7,
      },
    },
  };
  useEffect(() => {
    client
      ?.fetch(query)
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App__project mt-32 px-20">
      <div className="skills__heading  flex items-center w-fit mb-6 text-sm">
        <div></div>
        <h1 className="p-2 px-5 font-medium text-xs">My Projects </h1>
      </div>

      <div className="project__container mt-12 flex flex-col items-center ">
        <div className="project__toggle flex">
          {["Web", "App", "Clone", "All"].map((data, index) => {
            return (
              <div
                onClick={() => setToggle(`${data}`)}
                className="m-2 p-4 cursor-pointer"
                key={index}
                style={{
                  backgroundColor: toggle === data ? "#88cdf5" : "#fff",
                  color: toggle === data ? "#ffff" : "#303340",
                }}>
                {data}
              </div>
            );
          })}
        </div>
        <div className="cards__container flex flex-row justify-center">
          {projects?.map((data, index) => {
            return data.type.includes(toggle) ? (
              <motion.div
                key={index}
                className="project_card flex flex-col justify-center p-6 m-10"
                variants={container}
                initial="hidden"
                whileInView="show">
                <div className="card_img m-auto">
                  <img src={`${urlFor(data?.img)}`} alt="cardImg" />
                </div>
                <div className="card_title my-4 text-xl font-semibold">
                  {data?.title}
                </div>
                <div className="card_skill_img"></div>
                <div className="card_description text-xs">
                  <ul className="list-disc ml-4">
                    {data?.desc.map((desc, index) => {
                      return <li key={index}>{desc}</li>;
                    })}
                  </ul>
                  <div className="card_buttons flex flex-row ml-4 mt-4 text-sm">
                    <a href={data?.projectLink}>View Project -&gt;</a>
                    <a className="ml-6" href={data?.codeLink}>
                      View code -&gt;
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              <h1 className="mt-40">No projects yet!!!</h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
