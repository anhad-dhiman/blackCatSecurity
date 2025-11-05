import { Link } from 'react-router-dom';
export default function HomeAutomation() {
    return (
        <div className="min-h-screen  text-gray-800 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-8">
                    Home Automation
                </h1>

                {/* Intro */}
                <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
                    At <span className="text-red-600 font-semibold">Black Cat Security</span>, we believe your home should respond to you — not the other way around. Leveraging over 15 years of experience, we design and install smart systems that make life seamless, safe, and connected.
                </p>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100 rounded-xl shadow-inner mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Feature Image — Smart Home Control, Automation Panel or Living Space ]
                </div>

                {/* Key Features Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        What We Offer
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-lg">
                        <div className="space-y-6">
                            <div>
                                <span className="font-semibold text-red-500">Smart Lighting & Climate Control</span> – Automate lighting scenes, schedules, and temperature from one intuitive system.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Voice & App Control</span> – Full control of your home’s systems via smartphone, tablet or voice assistant.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Integrated Security & Monitoring</span> – Automation + security working together for peace of mind and true connected living.
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <span className="font-semibold text-red-500">Entertainment & Multi-Room Audio/Video</span> – Streamlined control of your media systems across your home.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Automated Blinds & Shading</span> – Effortless light management and privacy with motorized control built in.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Future-Proof Infrastructure</span> – Systems designed to evolve and scale with emerging tech and your lifestyle.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100 rounded-xl shadow-inner mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Image — Smart Panel, App Interface or Automation Setup ]
                </div>

                {/* Why Choose Us Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        Why Choose Black Cat Security
                    </h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                        Because automation isn’t just about gadgets — it’s about designing a home that works for you. From bespoke system design and expert installation to ongoing support and service, we ensure your smart home is built to perform and built to last.
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
