import { Link } from 'react-router-dom';
export default function AudioVideo() {
    return (
        <div className="min-h-screen text-gray-800 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-8">
                    Audio & Video Solutions
                </h1>

                {/* Introductory Paragraph */}
                <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
                    At <span className="text-red-600 font-semibold">Black Cat Security</span>, we believe high-quality audio and video systems are central to modern homes and businesses. With years of experience, we design and install bespoke A/V solutions that deliver performance, clarity and style.
                </p>

                {/* Hero Image Placeholder */}
                <div className="w-full h-80 bg-gray-100 rounded-xl mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Hero Image — Home Theater, Media Room, Business A/V Setup ]
                </div>

                {/* Features / What We Offer Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        What We Offer
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-lg">
                        <ul className="list-disc list-inside space-y-4">
                            <li>
                                <span className="font-semibold text-red-500">Custom Home Theater Installations</span> – premium sound and visuals tailored for your space.
                            </li>
                            <li>
                                <span className="font-semibold text-red-500">Multi-Room Audio & Video Distribution</span> – seamless music and video throughout your home or business.
                            </li>
                            <li>
                                <span className="font-semibold text-red-500">High-Definition Display & Projection Systems</span> – crisp image quality for media, presentations or entertainment.
                            </li>
                        </ul>
                        <ul className="list-disc list-inside space-y-4">
                            <li>
                                <span className="font-semibold text-red-500">Smart Control Interfaces</span> – control your audio and video with one app or voice assistant.
                            </li>
                            <li>
                                <span className="font-semibold text-red-500">Acoustic & Visual Optimization</span> – spaces designed for best sound and sight performance.
                            </li>
                            <li>
                                <span className="font-semibold text-red-500">Future-Ready Infrastructure</span> – built to accommodate upcoming standards and new tech.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100 rounded-xl mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Image — A/V Rack, Speaker Setup, Media Control Panel ]
                </div>

                {/* Value Proposition Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        Why Choose Black Cat Security for A/V?
                    </h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                        Because every detail matters — from proper wiring and acoustics to intuitive control and long-term reliability. We bring the same dedication we apply to security systems into our audio and video installations, so you get one trusted partner for your complete environment.
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
