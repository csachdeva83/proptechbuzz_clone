import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-white border-gray-200 sticky top-0 z-30 bg-opacity-60 backdrop-blur-lg backdrop-filter">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="./proptechbuzz_logo.svg" className="h-6 sm:h-8" alt="PropTechBuzz Logo" />
                </a>
                <div className="flex xl:order-2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-[#FFA804] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center sm:block hidden" onClick={toggleMenu}>
                        Submit Your Product
                    </button>
                    <button type="button" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center focus:ring-offset-slate-50&quot;,  animate-shimmer bg-[linear-gradient(110deg,#005EFF,45%,rgba(0,190,255,0.7),55%,#005EFF)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:inline-flex hidden" onClick={toggleMenu}>
                        Sign Up
                    </button>
                    <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={toggleMenu} aria-expanded={isMenuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full xl:flex xl:w-auto xl:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 xl:p-0 mt-4 border border-gray-100 rounded-lg xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0">
                        <li>
                            <a href="#" className="block py-2 px-3 xl:p-0 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 ">Leaders Hive</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 xl:p-0 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 ">News</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 xl:p-0 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 ">Categories</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 xl:p-0 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 ">Communities</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 xl:p-0 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 ">Advertise</a>
                        </li>
                        <li>
                            <div className='w-full border border-gray-200 my-2 sm:hidden' />
                        </li>
                        <li>
                            <button type="button" className="text-white bg-[#FFA804] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center py-2 px-3 w-full mt-2 sm:hidden" onClick={toggleMenu}>
                                Submit Your Product
                            </button>
                        </li>
                        <li>
                            <button type="button" className="text-white bg-blue-700 font-medium rounded-lg text-sm text-center focus:ring-offset-slate-50&quot;, inline-flex animate-shimmer bg-[linear-gradient(110deg,#005EFF,45%,rgba(0,190,255,0.7),55%,#005EFF)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 py-2 px-3 w-full mt-2 items-center justify-center sm:hidden" onClick={toggleMenu}>
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
