import Logo from "../assets/logo-transparent.svg";

const NavBar = () => {
    return <>
    <div className="sticky inset-x-0 top-0 w-full z-index-50">
            <div className="mx-auto w-full h-20 max-w-screen=xl px-2.5 lg:px-20 content-center">
                <div className="flex items-center justify-between">
                    <img 
                        src={Logo}
                        alt="logo"
                        className="h-14 w-14 content-end"
                    />
                    <div>
                        <a className="bg-black px-4 py-2 rounded-md text-white cursor-pointer relative">Login</a>
                        <a className="bg-black px-4 py-2 rounded-md text-white cursor-pointer ml-2">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default NavBar;