"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import NextImage from "@/components/ui/image"
import styles from "./hero.module.css"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div className="relative">
      <div
        className={cn(
          "relative h-96 w-full bg-[url('/background.jpeg')] bg-cover bg-center bg-no-repeat"
        )}
      >
        <span className="absolute inset-0 bg-black/50"></span>
        <div className="absolute top-32 flex items-center justify-center gap-2 px-[4%] ">
          {/* <div className="relative h-24 w-28">
            <Image
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              src="/old-manila.png"
              alt="old"
              style={{
                objectFit: "cover",
                marginTop: "-12px",
              }}
            />
          </div> */}
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.75,
                },
              }}
              className="text-dark-one leading-2 mb-3 flex w-full flex-col items-center text-left font-semibold text-white md:block"
            >
              <span className="text-lg md:mr-4 md:text-[32px]">
                Old Manila Home of Authentic Filipino Dishes
              </span>
            </motion.h1>
            <div className="flex gap-3">
              <Button className="text-white">Order</Button>
              <Button variant="outline" className="text-white">
                Reserve Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute z-[-10] top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center bg-black/50"></div> */}
    </div>
  )
}

export default Hero
