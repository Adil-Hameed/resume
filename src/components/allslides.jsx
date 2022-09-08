import { useState } from "react";
import { Tab } from "@headlessui/react";

import Port1 from "../assets/a1.jfif";
import Port2 from "../assets/a2.jpg";
import Port3 from "../assets/a3.jfif";
import Port4 from "../assets/a4.jpg";
import Port5 from "../assets/a5.jpg";
import Port6 from "../assets/1.5da97bc494017804e9df.jpg";
import Port7 from "../assets/a7.jfif";
import Port8 from "../assets/5.jfif";
import Port9 from "../assets/a9.jfif";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    let [categories] = useState({
        All: [
            {
                pic: Port1,
                color: "bg-[#FFF0F0]",
                para: "UI/UX",
                foot: "My Creativity",
            },
            {
                pic: Port2,
                color: "bg-[#FFF3FC]",
                para: "Web Design",
                foot: "My Creativity",
            },
            {
                pic: Port3,
                color: "bg-[#FFF0F0]",
                para: "Logo",
                foot: "My Creativity",
            },
            {
                pic: Port4,
                color: "bg-[#E9FAFF]",
                para: "Video",
                foot: "My Creativity",
            },
            {
                pic: Port5,
                color: "bg-[#FFFAE9]",
                para: "UI/UX",
                foot: "My Creativity",
            },
            {
                pic: Port6,
                color: "bg-[#FCF4FF]",
                para: "Vedio",
                foot: "My Creativity",
            },
            {
                pic: Port7,
                color: "bg-[#FFF0F8]",
                para: "UI/UX",
                foot: "My Creativity",
            },
            {
                pic: Port8,
                color: "bg-[#FFF0F8]",
                para: "Web Design",
                foot: "My Creativity",
            },
            {
                pic: Port9,
                color: "bg-[#FCF4FF]",
                para: "Logo",
                foot: "My Creativity",
            },
        ],
        Vedio: [
            {
                pic: Port6,
                color: "bg-[#FCF4FF]",
                para: "Vedio",
                foot: "My Creativity",
            },
            {
                pic: Port4,
                color: "bg-[#E9FAFF]",
                para: "Video",
                foot: "My Creativity",
            },
        ],
        Logo: [
            {
                pic: Port3,
                color: "bg-[#FFF0F0]",
                para: "Logo",
                foot: "My Creativity",
            },
            {
                pic: Port9,
                color: "bg-[#FCF4FF]",
                para: "Logo",
                foot: "My Creativity",
            },
        ],
        Web: [
            {
                pic: Port2,
                color: "bg-[#FFF3FC]",
                para: "Web Design",
                foot: "My Creativity",
            },
            {
                pic: Port8,
                color: "bg-[#FFF0F8]",
                para: "Web Design",
                foot: "My Creativity",
            },
        ],
        Graphic_Design: [
            {
                pic: Port5,
                color: "bg-[#FFFAE9]",
                para: "UI/UX",
                foot: "My Creativity",
            },
            {
                pic: Port1,
                color: "bg-[#FFF0F0]",
                para: "UI/UX",
                foot: "My Creativity",
            },
            {
                pic: Port7,
                color: "bg-[#FFF0F8]",
                para: "UI/UX",
                foot: "My Creativity",
            },
        ],
    });

    return (
        <div className="bg-white container_flud rounded-xl py-5">
            <Tab.Group>
                <Tab.List className="flex flex-wrap lg:justify-end md:justify-center sm:justify-start p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    "font-medium leading-5 mx-3 px-2",
                                    "ring-white ring-opacity-60 ring-offset-2",
                                    selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-white/[0.12] hover:text-[#EC3C63]"
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="">
                    {Object.values(categories).map((posts, i) => (
                        <Tab.Panel key={i}>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 px-5 my-5">
                                {posts.map((post, i) => (
                                    <div className={`${post.color} rounded-xl`} key={i}>
                                        <div className="overflow-hidden rounded-xl mx-10 my-5">
                                            <img
                                                src={post.pic} alt=""
                                                className="rounded-xl hover:scale-110 duration-300 w-full"
                                            />
                                        </div>
                                        <p className="text-gray-400 text-sm mx-10">{post.para}</p>
                                        <p className="text-xl mx-10 pb-3">{post.foot}</p>
                                    </div>
                                ))}
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
