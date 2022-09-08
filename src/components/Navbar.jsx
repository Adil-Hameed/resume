import { Link } from "react-router-dom"
import Logo from "../assets/download.png"
import { FiMoon } from "react-icons/fi";
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { BsPerson } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiPagesLine, RiContactsBookLine } from "react-icons/ri"
import { FaBloggerB } from "react-icons/fa"

export default function Navbar() {
    return (
        <Disclosure as="nav" className="lg:pt-10 w-full absolute z-50">
            {({ open }) => (
                <>
                    <div className=" flex items-center lg:justify-around justify-between lg:items-center lg:h-16 h-20  lg:bg-transparent bg-gray-100">
                        <div className="flex items-center lg:pl-12 p-6">
                            <img className="lg:h-8 h-7 w-auto" src={Logo} alt="Workflow" />
                        </div>
                        <div className="hidden lg:flex lg:justify-end lg:w-[80%] space-x-6">
                            <Link to="/">

                                <div
                                    className="  py-2 rounded px-3 text-white bg-gradient-to-r from-[#fa5252] to-[#dd2476] inline-flex items-center"
                                >
                                    <div className="mx-2 text-xl font-bold">

                                        <AiOutlineHome />
                                    </div>
                                    Home
                                </div>
                            </Link>
                            <Link to="/About">

                                <div
                                    className="text-black hover:text-white bg-white py-2 rounded px-3 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] inline-flex items-center"
                                >
                                    <div className="mx-2 text-xl font-bold">
                                        < BsPerson />
                                    </div>
                                    About
                                </div>
                            </Link>
                            <Link to="/Resume">

                                <div

                                    className="text-black hover:text-white bg-white py-2 rounded px-3 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] inline-flex items-center"
                                >
                                    <div className="mx-2 text-xl font-bold">

                                        <RiPagesLine />
                                    </div>
                                    Resume
                                </div>
                            </Link>
                            <Link to="/Work">
                                <div

                                    className="text-black hover:text-white bg-white py-2 rounded px-3 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] inline-flex items-center"
                                >
                                    <div className="mx-2 text-xl font-bold">

                                        <FiCodesandbox />
                                    </div>
                                    Works
                                </div>
                            </Link>

                            <Link to="/Blog">

                                <div

                                    className="text-black hover:text-white bg-white py-2 rounded px-3 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] inline-flex items-center"
                                >
                                    <div className="mx-2 text-xl font-bold">

                                        <FaBloggerB />
                                    </div>
                                    Blogs
                                </div>
                            </Link>
                            <Link to="/Contact">

                                <div

                                    className="text-black hover:text-white bg-white py-2 rounded px-3 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] inline-flex items-center"
                                >
                                    <div className="mx-2 text-xl font-bold">

                                        <RiContactsBookLine />
                                    </div>
                                    Contact
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-between lg:justify-center items-center w-24 lg:mr-0 mr-4">
                            <div className="rounded-full hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:cursor-pointer bg-white h-10 w-10 flex justify-center items-center">

                                <FiMoon className="h-6 w-6 " aria-hidden="true" />
                            </div>
                            <div className="inset-y-0  flex items-center  lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2  rounded-full bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white">

                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------------------- */}
                    <Disclosure.Panel className="lg:hidden bg-white rounded-bl-3xl rounded-br-3xl shadow-lg ">
                        <div className="pt-2 pb-4 space-y-1">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Link to="/">
                                <Disclosure.Button
                                    className="text-[#FDAAAA] flex pl-6 pr-4 py-2 m] font-semibold"
                                >
                                    <div className="mx-2 text-xl font-bold">

                                        <AiOutlineHome />
                                    </div>
                                    Home
                                </Disclosure.Button>
                            </Link>
                            <Link to="/About">
                                <Disclosure.Button
                                    className="border-transparent text-black hover:text-[#FDAAAA] flex pl-6 pr-4 py-2 text-[0.9rem] font-semibold"
                                >

                                    <div className="mx-2 text-xl font-bold">
                                        < BsPerson />
                                    </div>
                                    About
                                </Disclosure.Button>
                            </Link>
                            <Link to='/Resume'>
                                <Disclosure.Button
                                    className="border-transparent text-black hover:text-[#FDAAAA] flex pl-6 pr-4 py-2 text-[0.9rem] font-semibold"
                                >
                                    <div className="mx-2 text-xl font-bold">

                                        <RiPagesLine />
                                    </div>
                                    Resume
                                </Disclosure.Button>
                            </Link>
                            <Link to="/Work">
                                <Disclosure.Button
                                    className="border-transparent text-black hover:text-[#FDAAAA] flex pl-6 pr-4 py-2 text-[0.9rem] font-semibold"
                                >
                                    <div className="mx-2 text-xl font-bold">

                                        <FiCodesandbox />
                                    </div>
                                    Works
                                </Disclosure.Button>
                            </Link>
                            <Link to="/Blog">

                                <Disclosure.Button
                                    className="border-transparent text-black hover:text-[#FDAAAA] flex pl-6 pr-4 py-2 text-[0.9rem] font-semibold"
                                >
                                    <div className="mx-2 text-xl font-bold">
                                        <FaBloggerB />
                                    </div>
                                    Blogs
                                </Disclosure.Button>
                            </Link>
                            <Link to="/Contact">
                                <Disclosure.Button
                                    className="border-transparent text-black hover:text-[#FDAAAA] flex pl-6 pr-4 py-2 text-[0.9rem] font-semibold"
                                >
                                    <div className="mx-2 text-xl font-bold">

                                        <RiContactsBookLine />
                                    </div>
                                    Contact
                                </Disclosure.Button>
                            </Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}