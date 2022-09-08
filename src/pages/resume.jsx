import React from 'react'
import Navbar from '../components/Navbar'
import Heading from "../components/Heading";

import Image1 from "../assets/bg.54122ef3ac6eced211d3.jpg"


// import Heading from "../components/Heading";
import Education from '../components/education';
import Footercard from '../components/footercard';
import Knowledge from '../components/knowledge';
import { FaGraduationCap, FaMedal, FaShoppingBag } from "react-icons/fa";

export default function Resume() {
    return (
        < >

            <Navbar />
            <div className="pt-36 py-8 " style={{ backgroundImage: `url(${Image1})`, backgroundSize: "100% 100%" }}>

                <div className="w-[90%] mx-auto bg-white rounded-3xl ">
                    <div>
                        <Heading data={{ head: "Resume" }} />
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-white p-10 space-y-2">
                        <div className="flex flex-col">
                            <div className="flex container_fluid space-x-2 text-2xl">
                                <div className="text-[#F95054]">
                                    <FaGraduationCap />
                                </div>
                                <div>
                                    <h1 className="font-bold">Education</h1>
                                </div>
                            </div>
                            <div>
                                <Education
                                    card={{
                                        Color: "bg-[#FFF4F4]",
                                        Date: "2017-2021",
                                        title: "BS. in Mechanical Engineering",
                                        para: "Lahore Leads University",
                                    }}
                                />
                                <Education
                                    card={{
                                        Color: "bg-[#EEF5FA]",
                                        Date: "2013-2015",
                                        title: "FSc. (Pre-Engineering)",
                                        para: "Govt. College of Science",
                                    }}
                                />
                                <Education
                                    card={{
                                        Color: "bg-[#FCF4FF]",
                                        Date: "2011-2013",
                                        title: "Matric",
                                        para: "Govt Pilot Secondry High School",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col bg-white">
                            <div className="flex space-x-2  text-2xl">
                                <div className="text-[#F95054]">
                                    <FaShoppingBag />
                                </div>
                                <div>
                                    <h1 className="font-bold">Experience</h1>
                                </div>
                            </div>
                            <div>
                                <Education
                                    card={{
                                        Color: "bg-[#FFF1FB]",
                                        Date: "2021 - Continue.",
                                        title: "Full Stack Developer",
                                        para: "Vvork Cloud Technology",
                                    }}
                                />
                                <Education
                                    card={{
                                        Color: "bg-[#F2F4FF]",
                                        Date: "2018-2021",
                                        title: "Design Engineer",
                                        para: "WADIC",
                                    }}
                                />
                                <Education
                                    card={{
                                        Color: "bg-[#FCF9F2]",
                                        Date: "2016-2018",
                                        title: "Computer Hardwere & Software",
                                        para: "New Tech Automation",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col bg-white">
                            <div className="flex space-x-2 text-2xl">
                                <div className="text-[#F95054]">
                                    <FaMedal />
                                </div>
                                <div>
                                    <h1 className="font-bold">Award</h1>
                                </div>
                            </div>
                            <Education
                                card={{
                                    Color: "bg-[#FFF4F4]",
                                    Date: "2022",
                                    title: "Front End Developer",
                                    para: "Vvork Cloud Techonology",
                                }}
                            />
                            <Education
                                card={{
                                    Color: "bg-[#EEF5FA]",
                                    Date: "2022",
                                    title: "Back End Develooper",
                                    para: "Vvork Cloud Techonology",
                                }}
                            />
                            <Education
                                card={{
                                    Color: "bg-[#FCF4FF]",
                                    Date: "2022",
                                    title: "Full Stack Developer",
                                    para: "Vvork Cloud Techonology",
                                }}
                            />
                            <div></div>
                        </div>
                    </div>

                    <div className="md:grid-cols-2 sm:grid-cols-1 grid bg-[#F8FBFB] p-10 gap-5">
                        <div className="grid-rows-4">
                            <div className="py-5 container_flud flex-col flex">
                                <div className=" py-5">
                                    <h1 className="bg-[#F8FBFB] text-2xl ">Working Skill</h1>
                                </div>
                                <div>
                                    <div className="text-gray-700 flex justify-between font-Poppins,sans-serif">
                                        <strong>JavaScript</strong>
                                        <p className="font-bold">80%</p>
                                    </div>
                                    <div className="w-[100%] h-1 bg-[#EDF2F2] rounded">
                                        <div className="w-[80%] bg-[#FF6464] rounded h-1 my-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-5 container_flud">
                                <div className="text-gray-700 flex justify-between font-Poppins,sans-serif">
                                    <strong>React Js</strong>
                                    <p className="font-bold">95%</p>
                                </div>
                                <div className="w-[100%] h-1 bg-[#EDF2F2] rounded">
                                    <div className="w-[95%] bg-[#9272D4] rounded h-1 my-2"></div>
                                </div>
                            </div>
                            <div className="py-5 container_flud">
                                <div className="text-gray-700 flex justify-between font-Poppins,sans-serif">
                                    <strong>Tailwind</strong>
                                    <p className="font-bold">90%</p>
                                </div>
                                <div className="w-[100%] h-1 bg-[#EDF2F2] rounded">
                                    <div className="w-[90%] bg-[#5185D4] rounded h-1 my-2"></div>
                                </div>
                            </div>
                            <div className="py-5 container_flud">
                                <div className="text-gray-700 flex justify-between font-Poppins,sans-serif">
                                    <strong>HTML & CSS</strong>
                                    <p className="font-bold">75%</p>
                                </div>
                                <div className="w-[100%] h-1 bg-[#EDF2F2] rounded">
                                    <div className="w-[75%] bg-[#CA56F2] rounded h-1 my-2"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" py-5">
                                <h1 className="bg-[#F8FBFB] text-2xl  py-5">Knowledge About</h1>
                            </div>
                            <div className="flex flex-wrap gap-5">
                                <Knowledge skill={{ dis: "Social Media" }} />
                                <Knowledge skill={{ dis: "HTML" }} />
                                <Knowledge skill={{ dis: "CSS" }} />
                                <Knowledge skill={{ dis: "JS" }} />
                                <Knowledge skill={{ dis: "Bootstrap" }} />
                                <Knowledge skill={{ dis: "JQuery" }} />
                                <Knowledge skill={{ dis: "Tailwind" }} />
                                <Knowledge skill={{ dis: "React Js" }} />
                                <Knowledge skill={{ dis: "Sass" }} />
                                <Knowledge skill={{ dis: "Lass" }} />
                                <Knowledge skill={{ dis: "Media Querry" }} />
                            </div>
                        </div>
                    </div>
                    <div className='rounded-3xl'>
                        <Footercard foot={{ para: "© 2022 All Rights Reserved by Portfolio." }} />
                    </div>
                </div>
            </div>
        </>
    )
}

