export default function Networking() {
    return (
        <div className="min-h-screen text-gray-800 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-8">
                    Networking Solutions
                </h1>

                {/* Intro */}
                <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
                    At <span className="text-red-600 font-semibold">Black Cat Security</span>, networking is the backbone that makes every system in your home or business perform at its best. From fast wired infrastructure to robust wireless systems — we ensure your connectivity is seamless, secure and future-ready.
                </p>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100/60 rounded-xl shadow-inner mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Hero Image — Network Rack, Wiring Closet, Wireless Access Points ]
                </div>

                {/* Features / What We Offer Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        What We Offer
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-lg">
                        <div className="space-y-6">
                            <div>
                                <span className="font-semibold text-red-500">Cat 5e/6/6A Cabling</span> – High-performance wiring infrastructure that supports modern data loads and smart systems.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Fiber Optic Links</span> – For larger facilities or high-speed backhaul, we deliver reliable fiber infrastructure.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Enterprise-Grade WiFi & Access Points</span> – Robust, scalable wireless networks built for homes and businesses.
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <span className="font-semibold text-red-500">Network Closet & Rack Design</span> – Clean, organised panel setups with proper airflow and maintenance access.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">System Integration</span> – Networking solutions that tie together your security, automation, audio/video and IT systems.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Business-Class Management & Support</span> – Monitoring, maintenance and upgrades to keep your network running at peak performance.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100/60 rounded-xl shadow-inner mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Image — Network Panel, Switches, Access Point Installation ]
                </div>

                {/* Value Proposition Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        Why Choose Black Cat Security for Networking?
                    </h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                        Because connectivity is more than “just internet” — it’s the foundation for smart homes, secure businesses and systems that communicate flawlessly. With our expert design, clean installations and dedicated support, you’ll get a network built to last and ready to evolve.
                    </p>
                </section>

                {/* Call To Action */}
                <div className="text-center">
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition"
                    >
                        Get a Network Consultation
                    </a>
                </div>
            </div>
        </div>
    );
}
