import { Link } from 'react-router-dom';
export default function StructuredWiring() {
    return (
        <div className="min-h-screen  text-gray-800 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-8">
                    Structured Wiring
                </h1>

                {/* Intro Paragraph */}
                <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
                    Since <span className="font-semibold text-red-500">2008</span>, <span className=" font-semibold text-red-500">Black Cat Security</span> has specialized in delivering
                    reliable structured wiring solutions for homes and businesses.
                    Our experienced technicians ensure every wire, panel, and connection
                    is professionally installed to support all your security, audio, and automation needs.
                </p>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100 rounded-xl shadow-inner mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert High-Quality Image of Structured Wiring Setup or Installation Here ]
                </div>

                {/* Services Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        What We Offer
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-lg">
                        <ul className="list-disc list-inside space-y-4">
                            <li>
                                <span className="font-semibold text-red-500">Low Voltage Pre-Wiring</span> –
                                Installed during construction or renovation for a clean, hidden setup.
                            </li>
                            <li>
                                <span className="font-semibold text-red-500">Cat 5/6 & Fiber Optic Feeds</span> –
                                For high-speed data and smart home systems.
                            </li>
                            <li>
                                <span className="font-semibold text-red-500">Home & Business Integration</span> –
                                Combine security, intercom, and entertainment into one connected network.
                            </li>
                        </ul>
                        <ul className="list-disc list-inside space-y-4">
                            <li>
                                <span className="font-semibold text-red-500">Centralized Panels</span> –
                                Keep all wiring organized and easy to manage.
                            </li>
                            <li>
                                <span className="font-semibold text-red-500">Future-Proof Design</span> –
                                We plan for your current and future technology needs.
                            </li>
                            <li>
                                <span className="font-semibold text-red-500">Professional Labeling</span> –
                                Every connection is documented and tested for long-term reliability.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Image Placeholder */}
                <div className="w-full h-80  rounded-xl shadow-inner mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Image of Tech Panel, Wiring Closet, or Team at Work ]
                </div>

                {/* Why It Matters */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold  text-red-600 mb-6 text-center">
                        Why Structured Wiring Matters
                    </h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                        Proper wiring ensures your systems run smoothly and efficiently.
                        When done right from the start, it prevents messy cables, performance issues,
                        and costly repairs down the road. With <span className="font-semibold  text-red-600">Black Cat Security</span>,
                        your infrastructure is built to last clean, organized, and fully optimized.
                    </p>
                </section>

                {/* CTA Section */}
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
