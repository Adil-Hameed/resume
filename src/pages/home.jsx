// import React from 'react'
// import Navbar from "./components/Navbar"
import Navbar from "../components/Navbar"
import Image1 from "../assets/bg.54122ef3ac6eced211d3.jpg"
import Cv from "../assets/ADIL HAMEED Web.pdf"
import React from "react";
import Adil from "../assets/561459a3.jpg"
import Download from "../assets/down.png"
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin } from "react-icons/bs";
export default function Home() {
    return (
        <div className="h-screen " style={{ backgroundImage: `url(${Image1})`, backgroundSize: "100% 100%" }}>

            <Navbar />
            <div className="flex items-center justify-center  pt-36">

                <div className="space-y-3">
                    <img src={Adil} alt="" className="rounded-full w-64 h-64 mx-auto" />
                    <h1 className="text-center font-semibold text-4xl">
                        Engr. Adil Hameed 2022
                    </h1>
                    <p className="text-center text-gray-400 text-xl py-1">Front End Developer</p>
                    <div className="flex  items-center justify-center">
                        <a href="https://www.facebook.com/login" className="bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
                            <BsFacebook className="text-xl hover:text-white text-blue-700" />
                        </a>
                        <a href="https://twitter.com/i/flow/login" className="bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
                            <BsTwitter className="text-xl hover:text-white text-blue-500" />
                        </a>
                        <a href="https://www.pinterest.com/login/" className="bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
                            <BsPinterest className="text-xl hover:text-white text-red-700" />
                        </a>
                        <a href="https://www.linkedin.com/feed/" className="bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
                            <BsLinkedin className="text-xl hover:text-white text-blue-900" />
                        </a>
                    </div>
                    <div className="flex items-center justify-evenly w-56 mx-auto rounded-full bg-gradient-to-r from-[#fa5252] to-[#dd2476] ">
                        <div className=""><img src={Download} alt="" /></div>
                        <button className="flex items-center text-white text-xl py-3 rounded ">
                            <a href={Cv} download>

                                Download CV
                            </a>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
