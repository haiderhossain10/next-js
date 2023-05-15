import { BsArrowUpRight } from "react-icons/bs";

export default function HomeHero() {
    return (
        <>
            <section className="lg:h-screen 2xl:h-[900px] flex items-center justify-center">
                <div className="container">
                    <div className="lg:w-7/12 mx-auto text-center">
                        <h2 className="lg:text-6xl text-5xl font-bold leading-normal  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                            Digital Web Development Services
                        </h2>
                        <p className="text-sm lg:text-lg font-normal text-white leading-normal pt-6 pb-10 lg:px-[6rem]">
                            Create engaging and visually stunning web interfaces
                            with our expert front-end web development service.
                        </p>

                        <button className="h-[46px] lg:h-[50px] px-5 lg:px-10 rounded-full bg-gradient-to-r from-yellow-600 to-red-600 font-semibold text-white group hover:scale-110 transition-all duration-150 text-sm">
                            <div className="flex items-center gap-3 capitalize">
                                Hire us for project{" "}
                                <BsArrowUpRight className="text-sm lg:text-lg lg:group-hover:translate-x-3 group-hover:rotate-45 transition-all duration-150" />
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
