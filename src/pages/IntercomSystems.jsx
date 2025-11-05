import { Link } from 'react-router-dom';
export default function IntercomSystems() {
    return (
        <div className="min-h-screen text-gray-800 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-8">
                    Intercom Systems
                </h1>

                {/* Intro */}
                <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
                    Communication is key to both comfort and security. At{" "}
                    <span className="text-red-600 font-semibold">Black Cat Security</span>, we provide professional intercom
                    system installations that allow seamless communication between rooms, entryways, and offices — ensuring
                    convenience, safety, and control throughout your property.
                </p>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100/60 rounded-xl shadow-inner mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Image — Modern Intercom Panel, Door Station, or In-Home Display ]
                </div>

                {/* Features Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        Our Intercom Solutions Include
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-lg">
                        <div className="space-y-6">
                            <div>
                                <span className="font-semibold text-red-500">Audio & Video Intercoms</span> – See and speak to visitors
                                before granting access to your property.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Smart Door Stations</span> – Integrate intercoms with your
                                mobile device or security system for remote access control.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Wireless & Wired Options</span> – Choose a setup that fits
                                your building layout and budget.
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <span className="font-semibold text-red-500">Multi-Unit Systems</span> – Ideal for condos, offices, and
                                gated communities with multiple entry points.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Integration with Security</span> – Combine your intercom
                                with CCTV, alarms, or access control for a unified solution.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Custom Design & Installation</span> – Tailored to your
                                property’s needs by certified technicians.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100/60 rounded-xl shadow-inner mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Image — Intercom Call Panel or Apartment Entry System ]
                </div>

                {/* Why Choose Us Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        Why Choose Black Cat Security
                    </h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                        Whether it’s a single-family home or a large commercial facility, we design intercom systems that enhance
                        communication, strengthen security, and simplify daily life. Our installations are clean, efficient, and
                        future-ready — with expert support every step of the way.
                    </p>
                </section>

                {/* Call to Action */}
                <div className="text-center">
                    <Link
                        to="/contact"
                        className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition"
                    >
                        Get a Security Assessment
                    </Link>
                </div>
            </div>
        </div>
    );
}
