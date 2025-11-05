import { Link } from 'react-router-dom';
export default function CentralVacuum() {
    return (
        <div className="min-h-screen text-gray-800 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-8">
                    Centralized Vacuum Systems
                </h1>

                {/* Intro */}
                <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
                    At <span className="text-red-600 font-semibold">Black Cat Security</span>, we offer high-quality centralized vacuum systems that provide cleaner, quieter, and more efficient operation for your home or business. With our experience and attention to detail, your environment will benefit from the power and convenience of built-in vacuum infrastructure.
                </p>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100 rounded-xl mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Hero Image — Central Vacuum Unit, Inlet Stations or Installation ]
                </div>

                {/* Features / What We Offer Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        What We Provide
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-lg">
                        <div className="space-y-6">
                            <div>
                                <span className="font-semibold text-red-500">Built-In Vacuum Panels</span> – Hidden equipment that handles cleaning without dragging a vacuum around.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Dedicated Ducting & Inlets</span> – Strategic placement throughout your property for optimal reach and convenience.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">High-Performance Motors & Filtration</span> – More power, less noise, and better air quality in your space.
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <span className="font-semibold text-red-500">Quiet & Efficient Operation</span> – The system runs quietly, leaving living or work spaces undisturbed.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Retrofits & New Installations</span> – Whether building new or upgrading, we integrate seamlessly with your layout.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Maintenance & Support</span> – We stand by our work and provide reliable service and upkeep for your system.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100 rounded-xl mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Image — In-Wall Inlet, Dust Collection Canister, or System Setup ]
                </div>

                {/* Value Proposition / Why Choose Us Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        Why Choose Black Cat Security for Central Vac?
                    </h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                        Because your environment deserves more than a standard vacuum. We combine professional installation, high-grade equipment, and responsive support to create a system that blends into your space while delivering top tier cleaning performance. Let us show you what a built-in solution can do.
                    </p>
                </section>

                {/* Call To Action */}
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
