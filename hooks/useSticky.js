import { useEffect, useState } from "react";

export default function useSticky(y = 30) {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.pageYOffset > y) {
                return setSticky(true);
            }
            return setSticky(false);
        });
    }, []);

    return isSticky;
}
