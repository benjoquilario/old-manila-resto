"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-[url('/background.jpeg')] bg-center bg-no-repeat	bg-cover h-72 w-full">
      <div className="absolute z-[-10] top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center bg-black/50"></div>
      <div className="flex justify-center items-center h-full">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.75,
            },
          }}
          className="font-bold mb-6 text-white leading-[1] text-dark-one text-[clamp(56px,9vw,86px)] text-center flex flex-col items-center w-full tracking-[-4px] md:block"
        >
          <span className="text-[32px] md:text-[clamp(56px,9vw,86px)] md:mr-4">
            Old Manila Home of Authentic Filipino Dishes
          </span>
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
