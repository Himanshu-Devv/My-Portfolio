import React from "react";
import Image from "next/image";
import introImage from "./Assets/headerImg.svg";
import { BsArrowUpRight } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

import Navbar from "../Component/Navbar";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const items = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

function Header() {
  return (
    <div className="App__header flex items-center  flex-col">
      <Navbar />
      <div className="header_intro flex justify-around items-center flex-row">
        <motion.div
          className="Header_about mx-3 my-20"
          variants={container}
          initial="hidden"
          whileInView="show">
          <p>Hello!</p>
          <br />
          <motion.div variants={items} className="heading font-bold">
            We Build <h2> Amazing</h2> Websites.
          </motion.div>
          <motion.div variants={items} className="flex p-2">
            <p className="mr-1">-</p>
            <p>
              Hi! I'am a Web Developer - building bold & pretty websites for
              companies online presence.
            </p>
          </motion.div>
          <motion.div variants={items} className="header__buttons flex">
            <a href="#Contact">
              Let's Talk
              <FaLocationArrow />
            </a>

            <a href="#Project">
              Projects <BsArrowUpRight />
            </a>
          </motion.div>
        </motion.div>
        <div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
            className="header_image">
            <Image src={introImage} quality={100} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Header;
