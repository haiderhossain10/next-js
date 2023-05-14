import { useEffect, useState } from "react";
import { HiOutlineArrowDown } from "react-icons/hi";

export default function BackToTop() {
    const [isScrolled, setScrolled] = useState(false);

    const topHandler = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <button
                onClick={topHandler}
                className="h-[50px] w-[50px] bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-full fixed bottom-8 right-8 flex items-center justify-center hover:scale-110 transition-all duration-150 group"
            >
                <HiOutlineArrowDown className="text-white text-lg group-hover:rotate-180 transition-all duration-200" />
            </button>
        </>
    );
}
