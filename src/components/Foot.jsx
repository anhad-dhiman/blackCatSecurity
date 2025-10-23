import { Link } from "react-router-dom"
function Foot() {
    return (
        <footer className="bg-black text-gray-300">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-6">
                <div className="md:flex md:justify-between">
                    {/* Logo Section */}
                    <div className="mb-6 md:mb-0 flex items-center">
                        <img src="/logo.jpg" className="h-16 me-3 rounded" alt="BlackCat Logo" />
                    </div>

                    {/* Services + Contact Sections */}
                    <div className="grid grid-cols-3 gap-x-12 gap-y-0 items-start">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Services</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4 hover:text-white transition">
                                    <Link to="/services/structuredwiring">
                                        Structured Wiring
                                    </Link>
                                </li>
                                <li className="mb-4 hover:text-white transition">
                                    <Link to="/services/securitysystems">
                                        Security Systems
                                    </Link>
                                </li>
                                <li className="mb-4 hover:text-white transition">
                                    <Link to="/services/homeautomation">
                                        Home Automation
                                    </Link>
                                </li>
                                <li className=" hover:text-white transition">
                                    <Link to="/services/intercomsystems">
                                        Intercom
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-transparent">_</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4 hover:text-white transition">
                                    <Link to="/services/audiovideo">
                                        Audio & Video
                                    </Link>
                                </li>
                                <li className="mb-4 hover:text-white transition">
                                    <Link to="/services/networking">
                                        Networking
                                    </Link>
                                </li>
                                <li className="mb-4 hover:text-white transition">
                                    <Link to="/services/centralvacuum">
                                        Vacuum System
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Contact Us</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-2 hover:text-white transition">
                                    <a href="tel:+16047214217" className="hover:text-white">
                                        Phone: (604)-7214-217
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-white transition">
                                    <a href="tel:+16047216016" className="hover:text-white">
                                        <span className="text-transparent">Phone:</span> (604)-7216-016
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-white transition">
                                    <a href="mailto:blackcatsecurityltd@hotmail.com" className="hover:text-white">
                                        Email: blackcatsecurityltd@hotmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

                {/* Footer bottom */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 sm:text-center">
                        © 2025 <span className="text-white font-semibold">BlackCat Security</span>. All Rights Reserved.
                    </span>
                    <span className="text-sm text-gray-400 sm:text-center">
                        Web Design
                    </span>
                </div>
            </div>
        </footer >
    );
}

export default Foot;

