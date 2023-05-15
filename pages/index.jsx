import HomeHero from "@/components/hero/HomeHero";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJqueryLogo } from "react-icons/di";
import {
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNuxtdotjs,
    SiPhp,
    SiTailwindcss,
} from "react-icons/si";
import { FaLaravel, FaReact } from "react-icons/fa";
import { RiVuejsLine } from "react-icons/ri";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io";
import { GrGraphQl, GrMysql } from "react-icons/gr";

export default function Home() {
    return (
        <>
            <HomeHero />
            <section className="py-[100px] bg-[#090625] relative">
                <div className="container">
                    <div className="lg:w-6/12 mx-auto relative z-10">
                        <h2 className="text-5xl font-bold text-white text-center">
                            Our Technical
                            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-transparent bg-clip-text inline-block ml-2">
                                Expertise
                            </span>
                        </h2>
                    </div>
                    <div className="lg:w-8/12 mx-auto relative z-10">
                        <ul className="flex flex-wrap justify-center gap-10 mt-20">
                            <li>
                                <AiFillHtml5 className="text-4xl text-white" />
                            </li>
                            <li>
                                <DiCss3 className="text-4xl text-white" />
                            </li>
                            <li>
                                <SiJavascript className="text-4xl text-white" />
                            </li>
                            <li>
                                <FaReact className="text-4xl text-white" />
                            </li>
                            <li>
                                <SiNextdotjs className="text-4xl text-white" />
                            </li>
                            <li>
                                <RiVuejsLine className="text-4xl text-white" />
                            </li>
                            <li>
                                <SiNuxtdotjs className="text-4xl text-white" />
                            </li>
                            <li>
                                <DiJqueryLogo className="text-4xl text-white" />
                            </li>
                            <li>
                                <BsFillBootstrapFill className="text-4xl text-white" />
                            </li>
                            <li>
                                <SiTailwindcss className="text-4xl text-white" />
                            </li>
                            <li>
                                <IoLogoNodejs className="text-4xl text-white" />
                            </li>
                            <li>
                                <SiExpress className="text-4xl text-white" />
                            </li>
                            <li>
                                <GrGraphQl className="text-4xl text-white" />
                            </li>
                            <li>
                                <SiMongodb className="text-4xl text-white" />
                            </li>
                            <li>
                                <GrMysql className="text-4xl text-white" />
                            </li>
                            <li>
                                <SiPhp className="text-4xl text-white" />
                            </li>
                            <li>
                                <FaLaravel className="text-4xl text-white" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="absolute top-0 left-0 h-[100px] w-[100px] bg-fuchsia-600 rounded-full blur-[6rem]"></div>
                <div className="absolute bottom-0 right-0 h-[100px] w-[100px] bg-yellow-600 rounded-full blur-[6rem]"></div>
            </section>
        </>
    );
}
