const NavBar = () => {
    return <>
        <div className="flex items-center justify-between">
            
            <div>
                <a className="bg-black px-4 py-2 rounded-md text-white cursor-pointer">Login</a>
                <a className="bg-black px-4 py-2 rounded-md text-white cursor-pointer ml-2">Sign Up</a>
            </div>
        </div>
    </>;
};

export default NavBar;