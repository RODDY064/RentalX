"use client"

import Image from "next/image";
import {motion,AnimatePresence } from 'framer-motion'
import { hero_animate,boxes,title_animate, boxes_2 } from "@motion/motions";
import { useState } from "react";
import Service from "@components/Service";
import Slider from "@components/Slider";
import Customer from "@components/Customer";
import { useRouter } from "next/navigation";



export default function Home() {
  const [searchPrompt , setSearchPrompt] = useState({
    search:'',
    location:'',
    pickup:'',
  })


  const router = useRouter()

  const handleQuery = (e) =>{
       e.preventDefault();
       router.push(`/rent?search=${searchPrompt.search}&location=${searchPrompt.location}`)
    }

  return (
    <>
      <AnimatePresence>
        <section
          className="w-full  h-screen max-sm:h-auto  max-sm:pb-[6rem] "
          id="hero"
        >
          <div className="z-1" id="heading">
            <motion.h1
              variants={title_animate}
              initial="hidden"
              animate="visible"
              className=" ml-10 mt-10 text-[3.5rem] xl:text-[5rem] xl:leading-none  leading-[3.5rem] font-ubuntu_m font-bold max-sm:mt-0 max-sn:ml-0 max-sm:mx-9 max-sm:leading-[3.6rem]"
            >
              looking to save more <br />
              on your <span className="title">rental </span>car ?
            </motion.h1>
            <h2 className="ml-10  my-10 font-ubuntu_b text-[1rem] font-[1000]">
              Discover RentalX car rental option in your country with a Rent Car{" "}
              <br />
              Select from ranges of cars options and local specials
            </h2>
          </div>
          <motion.div
            variants={hero_animate}
            initial="hidden"
            animate="visible"
            className="hero_card"
            id="card"
          >
            <motion.div
              variants={boxes}
              className="hero_card_sm"
              id="hero_card_sm"
            >
              <div className="absolute w-[95%] h-[98%] p-5">
                <Image
                  src="/assets/images/royce.png"
                  fill={true}
                  alt="hero_1"
                  className="rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
            <motion.div variants={boxes_2} className="hero_card_lg">
              <div className="absolute w-[98%] h-[98%] p-5">
                <Image
                  src="/assets/images/original.png"
                  fill={true}
                  alt="hero_2"
                  className="rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
        <div
          className="search_input max-sm:gap-2 max-sm:relative lg:translate-x-10 lg:translate-y-6"
          id="search"
        >
          <input
            type="text"
            value={searchPrompt.search}
            onChange={(e) =>
              setSearchPrompt((prompt)=>({...prompt,search: e.target.value }))
            }
            className="w-[30%] h-[80%] focus:outline-none focus:border-b-2 border-gray-200 max-sm:w-[40%]"
            placeholder="Search for car by brand"
          />
          <div className="ml-4 flex items-center gap-3 w-[20%] h-[80%] max-sm:w-[40%]">
            <h2>Location:</h2>
            <input
              type="text"
              value={searchPrompt.location}
              onChange={(e) =>
                setSearchPrompt((prompt)=>({...prompt,location: e.target.value }))
              }
              className="w-[100%] h-[100%] focus:outline-none border-b-2 border-gray-200"
            />
          </div>
          <div className="ml-4 flex items-center gap-3 h-[80%] max-sm:hidden">
            <h2>Pickup Date:</h2>
            <input
              type="date"
              value=""
              onChange={(e) =>
                setSearchPrompt((prompt)=>({...prompt,pickup: e.target.value }))
              }
              className="h-[100%] focus:outline-none border-b-2 border-gray-200"
            />
          </div>
          <div
            className="ml-4 w-[13%] max-sm:w-[17%] h-[95%] shadow-lg rounded-lg bg-black border border-gray-200 backdrop-blur-xs flex items-center justify-center cursor-pointer"
            onClick={handleQuery}
          >
            <h1 className="text-lg  bg-gradient-to-r from-fuchsia-400 to-lime-400 bg-clip-text text-transparent font-medium max-sm:text-sm">
              Search
            </h1>
          </div>
        </div>
        <Service />
        <Slider />
        <Customer />
      </AnimatePresence>
    </>
  );
}
