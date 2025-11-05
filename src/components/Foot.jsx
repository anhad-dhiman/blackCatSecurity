import { Link } from "react-router-dom";

function Foot() {
    return (
        <footer className="bg-black text-gray-300">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0">
                    {/* Services + Contact Sections */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 w-full">
                        {/* Services Column 1 */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white uppercase">
                                Services
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-2 hover:text-white transition">
                                    <Link to="/services/structuredwiring">Structured Wiring</Link>
                                </li>
                                <li className="mb-2 hover:text-white transition">
                                    <Link to="/services/securitysystems">Security Systems</Link>
                                </li>
                                <li className="mb-2 hover:text-white transition">
                                    <Link to="/services/homeautomation">Home Automation</Link>
                                </li>
                                <li className="mb-2 hover:text-white transition">
                                    <Link to="/services/intercomsystems">Intercom</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Services Column 2 */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white uppercase md:text-transparent">
                                <span className="md:hidden">More Services</span>
                                <span className="hidden md:inline">_</span>
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-2 hover:text-white transition">
                                    <Link to="/services/audiovideo">Audio & Video</Link>
                                </li>
                                <li className="mb-2 hover:text-white transition">
                                    <Link to="/services/networking">Networking</Link>
                                </li>
                                <li className="mb-2 hover:text-white transition">
                                    <Link to="/services/centralvacuum">Vacuum System</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className="col-span-2 md:col-span-1">
                            <h2 className="mb-4 text-sm font-semibold text-white uppercase">
                                Contact Us
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-2 hover:text-white transition">
                                    <a href="tel:+16047214217" className="break-words">
                                        Phone: (604)-7214-217
                                    </a>
                                </li>
                                <li className="mb-2 hover:text-white transition">
                                    <a href="tel:+16047216016" className="break-words">
                                        Phone: (604)-7216-016
                                    </a>
                                </li>
                                <li className="mb-2 hover:text-white transition">
                                    <a
                                        href="mailto:blackcatsecurityltd@hotmail.com"
                                        className="break-words"
                                    >
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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-sm text-gray-400 text-center sm:text-left">
                        © 2025{" "}
                        <span className="text-white font-semibold">BlackCat Security</span>. All Rights
                        Reserved.
                    </span>
                    <span className="text-sm text-gray-400 text-center sm:text-right">
                        Web Design
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Foot;