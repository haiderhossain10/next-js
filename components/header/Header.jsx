import navigation from "@/data/navigation";
import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";

export default function Header() {
    return (
        <>
            <nav className="py-8">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href="/">
                                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                                    Haider.
                                </h2>
                            </Link>
                        </div>
                        <div className="lg:flex items-center gap-8">
                            <ul className="hidden lg:flex items-center gap-8">
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
                    </div>
                </div>
            </nav>
        </>
    );
}
