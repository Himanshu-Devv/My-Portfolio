import React from "react";
import { motion } from "framer-motion";
import Img1 from "./Assets/serviceGif1.gif";
import Img2 from "./Assets/serviceGif2.gif";
import Img3 from "./Assets/serviceGif3.gif";
import Image from "next/image";

const imageAnimation = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};
const divAnimation = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};
const Services = () => {
  return (
    <div className="App__services px-20 mt-20">
      <div className="skills__heading  flex items-center w-fit mb-6 text-sm">
        <div></div>
        <h1 className="p-2 px-5 font-medium text-xs">Our Services </h1>
      </div>
      <motion.div className="service__container flex flex-row flex-wrap justify-center items-center">
        <motion.div className="service__card">
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            whileInView="show">
            <Image src={Img1} quality="100" />
          </motion.div>
          <motion.div
            variants={divAnimation}
            initial="hidden"
            whileInView="show">
            <h1>Frontend Development</h1>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="service__card">
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            whileInView="show">
            <Image src={Img2} quality="100" />
          </motion.div>
          <motion.div
            variants={divAnimation}
            initial="hidden"
            whileInView="show">
            <h1>Website Development</h1>
            <p>
              Website development is the work involved in developing a website
              for the Internet.
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="service__card">
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            whileInView="show">
            <Image src={Img3} quality="100" />
          </motion.div>
          <motion.div
            variants={divAnimation}
            initial="hidden"
            whileInView="show">
            <h1>App Development</h1>
            <p>
              App development is the work involved in developing a app for
              mobile and tablets.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
