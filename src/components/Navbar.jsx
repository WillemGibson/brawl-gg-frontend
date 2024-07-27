import Logo from "../assets/logo-transparent.svg";

export function NavBar() {
    return <>
        <div className="sticky inset-x-0 top-0 w-full z-50">
            <div className="mx-auto w-full h-24 max-w-screen=xl px-2.5 lg:px-20 content-center bg-black">
                <div className="flex items-center justify-between mt-5 mb-5">
                        <a href="/">
                            <img 
                                src={Logo}
                                alt="logo"
                                className="h-14 w-14 content-end"
                            />
                        </a>
                    <div>
                        <a 
                            href="#login"
                            className="mr-5 max-w-fit px-5 py-2 rounded-md text-white font-bold cursor-pointer relative hover:bg-stone-950 active:bg-zinc-950"
                            >
                                LOG IN
                        </a>
                        <a 
                            href="#signup"
                            className="mx-auto max-w-fit px-5 py-2 rounded-md bg-highlight text-white font-bold cursor-pointer relative hover:bg-amber-500 active:bg-amber-400"
                            >
                                JOIN NOW
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}