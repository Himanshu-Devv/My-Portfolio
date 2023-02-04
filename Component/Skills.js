import React, { useEffect, useState } from "react";
import Image from "next/image";
import Gif from "./Assets/skillsImg.svg";
import { client, urlFor } from "../client";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const container2 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const items = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};
const Skills = () => {
  const query = `*[_type == "skills"]`;
  const [skills, setSkills] = useState();
  // const images = [reactImg, sassImg, nextImg, jsImg];
  // console.log(urlFor(skillsImg[0].image).options.baseUrl);

  useEffect(() => {
    client
      ?.fetch(query)
      .then((data) => {
        // console.log(data);

        setSkills(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App__skills px-10 mt-20">
      <div className="skills__heading  flex items-center w-fit mb-6 text-sm">
        <div></div>
        <h1 className="p-2 px-5 font-medium text-xs">Skills</h1>
      </div>
      <div className="skills__container flex items-center justify-between">
        <motion.div
          variants={container}
          className="skills_info w-1/2"
          initial="hidden"
          whileInView="show">
          <motion.h1 variants={items} className="text-3xl font-semibold mb-4">
            As a Developer I am so good at my <span>Skills.</span>
          </motion.h1>
          <motion.p variants={items} className="text-xs">
            All developers have good skills to make sure satisfied their
            clients, as a developer i am also specialized few skills.
          </motion.p>
          <motion.div
            variants={container2}
            initial="hidden"
            whileInView="show"
            className="skill_bars my-10">
            {skills?.map((data, index) => {
              return (
                <motion.div
                  variants={items}
                  className="w-full my-4"
                  whileInView="show"
                  key={index}>
                  <h3 className="text-sm my-2">{data.title}</h3>
                  <div className="bar">
                    <div
                      className="flex items-center justify-end pr-3 text-xs"
                      style={{ width: `${data.percent}%` }}>
                      {data.percent}%
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        <motion.div
          className="skills_images flex justify-center items-center flex-wrap w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}>
          <div className="image">
            <Image src={Gif} alt="gif" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
