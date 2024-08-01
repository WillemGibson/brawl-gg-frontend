import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-transparent.svg";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function NavBar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 0 && !scrolled) {
            setScrolled(true);
        } else if (latest === 0 && scrolled) {
            setScrolled(false);
        }
    });

    const defaultClasses = "transition-all absolute inset-0 -z-1 border-highlight";

    let navBarClasses = scrolled ? `${defaultClasses} border-b border-highlight bg-black/75 backdrop-blur-lg` : `${defaultClasses} bg-transparent`;

    return <>
        <div className="sticky inset-x-0 top-0 w-full z-50">
            <div className={navBarClasses}></div>
            <div className="mx-auto w-full h-24 max-w-screen=xl px-2.5 lg:px-20 content-center">
                <div className="flex items-center justify-between mt-5 mb-5">
                    <Link className="z-20" to="/">
                        <img 
                            src={Logo}
                            alt="logo"
                            className="h-14 w-14 pointer-events-none"
                        />
                    </Link>
                    <div>
                        <Link 
                            to="/login"
                            className="mr-5 max-w-fit px-5 py-2 rounded-md text-white font-bold cursor-pointer relative hover:bg-stone-950 active:bg-zinc-950"
                            >
                                LOG IN
                        </Link>
                        <Link
                            to="/signup"
                            className="mx-auto max-w-fit px-5 py-2 rounded-md bg-highlight text-white font-bold cursor-pointer relative hover:bg-amber-500 active:bg-amber-400"
                            >
                                JOIN NOW
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}