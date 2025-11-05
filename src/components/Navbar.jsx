import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-red-600 shadow-lg fixed top-0 left-0 right-0 z-50 w-full">
            <div className="px-4 lg:px-8">
                {/* Top bar with logo and menu button */}
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <img
                        src="/logo.jpg"
                        className="h-10 sm:h-12 lg:h-16 rounded flex-shrink-0"
                        alt="BlackCat Logo"
                    />

                    {/* Desktop menu - Changed to lg breakpoint */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            to="/"
                            className="mx-2 xl:mx-4 btn btn-ghost text-lg xl:text-xl text-white hover:bg-red-500 border-red-600"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="mx-2 xl:mx-4 btn btn-ghost text-lg xl:text-xl text-white hover:bg-red-500 border-red-600"
                        >
                            About Us
                        </Link>

                        <div className="dropdown dropdown-hover">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost mx-1 xl:m-1 text-lg xl:text-xl text-white hover:bg-red-500 border-red-600 flex items-center gap-2"
                            >
                                Services
                                <ChevronDown size={20} />
                            </div>
                            <ul
                                tabIndex="-1"
                                className="dropdown-content menu bg-black rounded-box z-10 w-44 p-2 shadow-lg border"
                            >
                                <li>
                                    <Link
                                        to="/services/structuredwiring"
                                        className="text-white hover:bg-red-500"
                                    >
                                        Structured Wiring
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/securitysystems"
                                        className="text-white hover:bg-red-500"
                                    >
                                        Security Systems
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/homeautomation"
                                        className="text-white hover:bg-red-500"
                                    >
                                        Home Automation
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/intercomsystems"
                                        className="text-white hover:bg-red-500"
                                    >
                                        Intercom
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/audiovideo"
                                        className="text-white hover:bg-red-500"
                                    >
                                        Audio & Video
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/networking"
                                        className="text-white hover:bg-red-500"
                                    >
                                        Networking
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/centralvacuum"
                                        className="text-white hover:bg-red-500"
                                    >
                                        Vacuum System
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <Link
                            to="/contact"
                            className="mx-2 xl:mx-4 btn btn-ghost text-lg xl:text-xl text-white hover:bg-red-500 border-red-600"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu toggle button - Changed to lg breakpoint */}
                    <button
                        className="lg:hidden text-white p-2 flex-shrink-0"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile dropdown menu - Changed to lg breakpoint */}
                {menuOpen && (
                    <div className="lg:hidden flex flex-col pb-4 space-y-1 w-full">
                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="block text-white text-lg w-full rounded p-3 hover:bg-red-500 transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                            className="block text-white text-lg w-full rounded p-3 hover:bg-red-500 transition"
                        >
                            About Us
                        </Link>

                        <details className="w-full">
                            <summary className="text-white text-lg hover:bg-red-500 rounded p-3 cursor-pointer flex items-center justify-between list-none">
                                Services <ChevronDown size={18} />
                            </summary>
                            <div className="flex flex-col bg-black rounded-lg mt-1 overflow-hidden">
                                <Link
                                    to="/services/structuredwiring"
                                    className="text-white hover:bg-red-500 p-3 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Structured Wiring
                                </Link>
                                <Link
                                    to="/services/securitysystems"
                                    className="text-white hover:bg-red-500 p-3 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Security Systems
                                </Link>
                                <Link
                                    to="/services/homeautomation"
                                    className="text-white hover:bg-red-500 p-3 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Home Automation
                                </Link>
                                <Link
                                    to="/services/intercomsystems"
                                    className="text-white hover:bg-red-500 p-3 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Intercom
                                </Link>
                                <Link
                                    to="/services/audiovideo"
                                    className="text-white hover:bg-red-500 p-3 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Audio & Video
                                </Link>
                                <Link
                                    to="/services/networking"
                                    className="text-white hover:bg-red-500 p-3 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Networking
                                </Link>
                                <Link
                                    to="/services/centralvacuum"
                                    className="text-white hover:bg-red-500 p-3 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Vacuum System
                                </Link>
                            </div>
                        </details>

                        <Link
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="block text-white text-lg w-full rounded p-3 hover:bg-red-500 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;