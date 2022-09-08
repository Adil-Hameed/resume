import React from "react";
import Navbar from '../components/Navbar'
import Heading from "../components/Heading";
import Aboutcard from "../components/aboutcard";

import { BsPhone } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";

import Image1 from "../assets/bg.54122ef3ac6eced211d3.jpg"
import Side from "../assets/561459a.jpg";
import Pic1 from "../assets/icon-6.7a458dd3dce6df96d462489320d4a456.svg";
import Pic2 from "../assets/icon-5.b7ce008f06241f1d51b48260af8b73f4.svg";
import Pic3 from "../assets/icon-4.6989ae67f415633aa2e1e3fd2e3c15a1.svg";
import Pic4 from "../assets/icon-3.c226edafbaa53ebea0decda25185b879.svg";
import Pic5 from "../assets/icon-2.cbff424c7b23532c3f955e6f747ee1fa.svg";
import Pic6 from "../assets/icon-1.71b741a6ab73765534e80db0a934febd.svg";

export default function About() {
    return (
        <div >

            <Navbar />
            <div className="pt-36 py-8" style={{ backgroundImage: `url(${Image1})`, backgroundSize: "100% 100%" }}>
                <div className="w-[90%] mx-auto rounded-3xl">
                    <div >

                        <Heading data={{ head: "About Me" }} />
                    </div>
                    <div className="grid  lg:grid-cols-3 md:grid-cols-1 grid-cols-1 bg-white ">
                        <div className=" px-10 col-span-1">
                            <img
                                src={Side}
                                alt=""
                                className="lg:w-80 lg:h-[57vh]  md:w-[80%] mx-auto rounded-xl "
                            />
                        </div>
                        <div className="col-span-2 px-10    ">
                            <h2 className="text-black text-2xl py-2">Who am i?</h2>
                            <p className="text-xl md:text-start text-center text-gray-500 lg:w-[80%]">
                                I'm Creative Director and UI/UX Designer from Sydney, Australia,
                                working in web development and print media. I enjoy turning complex
                                problems into simple, beautiful and intuitive designs.
                            </p>

                            <p className="text-xl md:text-start text-center text-gray-500 lg:w-[80%]">
                                My aim is to bring across your message and identity in the most
                                creative way. I created web design for many famous brand companies
                            </p>
                            <div className="py-3">
                                <h1 className="text-black text-2xl">Personal Info</h1>
                                <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                                    <div className="flex items-center space-x-3 py-4">
                                        <div className="bg-white ">
                                            <BsPhone className="text-2xl text-[#dd2476] rounded" />
                                        </div>
                                        <div>
                                            <p>Phone</p>
                                            <p>+92 321 4835379</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <div className="bg-white">
                                            <HiLocationMarker className="text-2xl text-[#dd2476] rounded" />
                                        </div>
                                        <div>
                                            <p>Location</p>
                                            <p>Lahore,Pakistan </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="bg-white">
                                            <HiOutlineMail className="text-2xl text-[#dd2476] rounded" />
                                        </div>
                                        <div>
                                            <p>Email</p>
                                            <p>adilhameed200@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 py-4">
                                        <div className="bg-white ">
                                            <AiOutlineCalendar className="text-2xl text-[#dd2476] rounded" />
                                        </div>
                                        <div>
                                            <p>Birthday</p>
                                            <p>Oct 29,1996</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="bg-white p-10 rounded-bl-3xl rounded-br-3xl">
                        <strong className="px-12 text-3xl">What I do!</strong>

                        <div className="container mx-auto grid  lg:grid-cols-3  md:grid-cols-2 gap-3">
                            <Aboutcard
                                card={{
                                    width:"sm:w-28",
                                    space:"py-5",
                                    logo: Pic1,
                                    tittle: "Ui/Ux Design",
                                    color: "bg-[#FCF4FF]",
                                    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                                }}
                            />

                            <Aboutcard
                                card={{
                                    width:"sm:w-28",
                                    space:"py-5",
                                    color: "bg-[#FEFAF0]",
                                    logo: Pic2,
                                    tittle: "Ui/Ux Design",
                                    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                                }}
                            />

                            <Aboutcard
                                card={{
                                    width:"sm:w-28",
                                    space:"py-5",
                                    color: "bg-[#FCF4FF]",
                                    logo: Pic3,
                                    tittle: "Ui/Ux Design",
                                    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                                }}
                            />

                            <Aboutcard
                                card={{
                                    width:"sm:w-28",
                                    space:"py-5",
                                    color: "bg-[#FFF4F4]",
                                    logo: Pic4,
                                    tittle: "Ui/Ux Design",
                                    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                                }}
                            />
                            <Aboutcard
                                card={{
                                    width:"sm:w-28",
                                    space:"py-5",
                                    color: "bg-[#FFF0F8]",
                                    logo: Pic5,
                                    tittle: "Ui/Ux Design",
                                    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                                }}
                            />
                            <Aboutcard
                                card={{
                                    width:"sm:w-28",
                                    space:"py-5",
                                    color: "bg-[#F3FAFF]",
                                    logo: Pic6,
                                    tittle: "Ui/Ux Design",
                                    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

