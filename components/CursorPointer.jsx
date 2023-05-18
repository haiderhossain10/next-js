import { useEffect, useRef, useState } from "react";

export default function CursorPointer() {
    const [getPosition, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setHovered] = useState(false);
    const cursorRef = useRef();

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        });
    }, [setPosition]);

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            if (
                e.target.closest("a") ||
                e.target.closest("button") ||
                e.target.closest("h2") ||
                e.target.closest("p")
            ) {
                if (cursorRef.current) {
                    setHovered(true);
                }
            } else {
                setHovered(false);
            }
        });
    }, []);
    return (
        <>
            <div
                ref={cursorRef}
                className={`${
                    isHovered
                        ? "h-[80px] w-[80px] backdrop-invert"
                        : "h-[16px] w-[16px]  bg-gradient-to-r from-fuchsia-600 to-pink-600"
                }  rounded-full fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75 z-40`}
                style={{
                    top: `${getPosition.y}px`,
                    left: `${getPosition.x}px`,
                }}
            ></div>
        </>
    );
}
