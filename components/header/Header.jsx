import navigation from "@/data/navigation";
import useSticky from "@/hooks/useSticky";
import Image from "next/image";
import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";

export default function Header() {
    const sticky = useSticky("200");

    return (
        <>
            <nav
                className={`left-0 right-0 top-0 transition-all duration-150 z-50 ${
                    sticky
                        ? "fixed bg-[#090625] py-4 shadow-lg"
                        : "absolute py-8"
                }`}
            >
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href="/">
                                <Image
                                    src="/assets/images/logo.png"
                                    height={30}
                                    width={30}
                                />
                            </Link>
                        </div>
                        <div className="hidden lg:flex items-center gap-8">
                            <ul className="lg:flex items-center gap-8">
                                {navigation?.map((nav) => (
                                    <li key={nav.id}>
                                        <Link
                                            className="text-sm font-normal text-white"
                                            href={nav.path}
                                        >
                                            {nav.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <button className="h-[46px] lg:h-[50px] px-5 lg:px-10 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 font-semibold text-white group hover:scale-110 transition-all duration-150 text-sm ">
                                <div className="flex items-center gap-3 capitalize">
                                    Contact us{" "}
                                    <BiMessageDetail className="text-sm lg:text-lg lg:group-hover:translate-x-3 transition-all duration-150" />
                                </div>
                            </button>
                        </div>
                        <button className="h-[18px] w-[24px] lg:hidden flex flex-col justify-between">
                            <span className="h-[1px] w-full bg-white"></span>
                            <span className="h-[1px] w-1/2 ml-auto bg-white"></span>
                            <span className="h-[1px] w-full bg-white"></span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
