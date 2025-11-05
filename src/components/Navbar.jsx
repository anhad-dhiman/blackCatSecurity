import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-red-600 shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="px-4 md:px-8">
                {/* Top bar with logo and menu button */}
                <div className="flex items-center justify-between h-16 md:h-20">
                    <img src="/logo.jpg" className="h-12 md:h-16 rounded" alt="BlackCat Logo" />

                    {/* Desktop menu (unchanged) */}
                    <div className="navbar-end hidden md:flex">
                        <Link to="/" className="mx-4 btn btn-ghost text-xl text-white hover:bg-red-500 border-red-600">Home</Link>
                        <Link to="/about" className="mx-4 btn btn-ghost text-xl text-white hover:bg-red-500 border-red-600">About Us</Link>

                        <div className="dropdown dropdown-hover">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost m-1 text-xl text-white hover:bg-red-500 border-red-600 flex items-center gap-2"
                            >
                                Services
                                <ChevronDown size={20} />
                            </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-black rounded-box z-1 w-40 p-2 shadow-lg border">
                                <li><Link to="/services/structuredwiring" className="text-white hover:bg-red-500 ">Structured Wiring</Link></li>
                                <li><Link to="/services/securitysystems" className="text-white hover:bg-red-500">Security Systems</Link></li>
                                <li><Link to="/services/homeautomation" className="text-white hover:bg-red-500">Home Automation</Link></li>
                                <li><Link to="/services/intercomsystems" className="text-white hover:bg-red-500">Intercom</Link></li>
                                <li><Link to="/services/audiovideo" className="text-white hover:bg-red-500">Audio & Video</Link></li>
                                <li><Link to="/services/networking" className="text-white hover:bg-red-500">Networking</Link></li>
                                <li><Link to="/services/centralvacuum" className="text-white hover:bg-red-500">Vacuum System</Link></li>
                            </ul>
                        </div>

                        <Link to="/contact" className="mx-4 btn btn-ghost text-xl text-white hover:bg-red-500 border-red-600">Contact Us</Link>
                    </div>

                    {/* Mobile menu toggle button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile dropdown menu */}
                {menuOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="block text-white text-lg hover:bg-red-500 w-full rounded p-3 transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                            className="block text-white text-lg hover:bg-red-500 w-full rounded p-3 transition"
                        >
                            About Us
                        </Link>

                        <details className="w-full">
                            <summary className="text-white text-lg hover:bg-red-500 rounded p-3 cursor-pointer flex items-center justify-between list-none">
                                Services <ChevronDown size={18} />
                            </summary>
                            <div className="flex flex-col bg-black rounded-lg mt-2 overflow-hidden">
                                <Link to="/services/structuredwiring" className="text-white hover:bg-red-500 p-3 transition" onClick={() => setMenuOpen(false)}>Structured Wiring</Link>
                                <Link to="/services/securitysystems" className="text-white hover:bg-red-500 p-3 transition" onClick={() => setMenuOpen(false)}>Security Systems</Link>
                                <Link to="/services/homeautomation" className="text-white hover:bg-red-500 p-3 transition" onClick={() => setMenuOpen(false)}>Home Automation</Link>
                                <Link to="/services/intercomsystems" className="text-white hover:bg-red-500 p-3 transition" onClick={() => setMenuOpen(false)}>Intercom</Link>
                                <Link to="/services/audiovideo" className="text-white hover:bg-red-500 p-3 transition" onClick={() => setMenuOpen(false)}>Audio & Video</Link>
                                <Link to="/services/networking" className="text-white hover:bg-red-500 p-3 transition" onClick={() => setMenuOpen(false)}>Networking</Link>
                                <Link to="/services/centralvacuum" className="text-white hover:bg-red-500 p-3 transition" onClick={() => setMenuOpen(false)}>Vacuum System</Link>
                            </div>
                        </details>

                        <Link
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="block text-white text-lg hover:bg-red-500 w-full rounded p-3 transition"
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
