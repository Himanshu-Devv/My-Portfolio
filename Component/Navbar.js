import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "./Assets/logoHimanshu2.png";
import { motion } from "framer-motion";
function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const animateNav = { transition: 5, height: "100vh", padding: "1rem" };

  return (
    <div className="App__navbar">
      <div className="navbar flex justify-center items-center" id="nav">
        <div className="logo">
          <a href="#Home" className="w-full cursor-pointer  flex items-center">
            <Image src={logo} />
            <h1 className="mx-2 text-xl">Himanshu</h1>
          </a>
        </div>
        <div
          className="hamburger cursor-pointer hidden flex-col justify-center"
          onClick={() => setToggleNav(!toggleNav)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navbar_menu flex flex-row justify-end items-center text-xs">
          {["Home", "Service", "Project", "Contact"].map((data, index) => {
            return (
              <div key={index} className="mx-3">
                <a href={`#${data}`}>.{data}</a>
              </div>
            );
          })}
        </div>
        <motion.div
          className="responsive_menu flex-col text-sm hidden"
          id="nav" // varients // transition={{ transition: 5 }}
          whileInView={toggleNav ? animateNav : { height: "0px" }}>
          <div className="logo2" style={{ flex: 0.2 }}>
            <a
              href="#Home"
              style={{ height: "70px" }}
              className="cursor-pointer  flex items-center">
              <Image src={logo} />
              <h1 className="mx-2 font-bold text-xl">Himanshu</h1>
            </a>
          </div>
          <div className="items">
            {["Home", "About", "Service", "Work", "Contact"].map(
              (data, index) => {
                return (
                  <div key={index} className="m-6 mt-0">
                    <a href={`#${data}`}>.{data}</a>
                  </div>
                );
              }
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
