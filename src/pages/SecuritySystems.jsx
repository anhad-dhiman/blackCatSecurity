import { Link } from 'react-router-dom';

export default function SecuritySystems() {
    return (
        <div className="min-h-screen  text-gray-800 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-8">
                    Security Systems
                </h1>

                {/* Intro */}
                <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
                    At <span className="text-red-600 font-semibold">Black Cat Security</span>, we understand that
                    protection is more than a product—it’s peace of mind. With over 15 years of experience,
                    our security system solutions are engineered for homes and businesses across the region.
                </p>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100 rounded-xl shadow-inner mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Hero Image of Security System Installation or Monitoring Setup ]
                </div>

                {/* Services Provided */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        Our Solutions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-lg">
                        <div className="space-y-6">
                            <div>
                                <span className="font-semibold text-red-500">Alarm Systems</span> – Comprehensive alarm systems with smart sensors, sirens, and voice/​mobile alerts.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Security Cameras</span> – High-definition, remote-accessible cameras for both home and business monitoring.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Access Control</span> – Card readers, biometrics, and mobile access management for controlled entry.
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <span className="font-semibold text-red-500">24/7 Monitoring</span> – Around-the-clock service that keeps an eye on your property so you don’t have to.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">System Integration</span> – Combine your alarms, cameras, automation and intercom into one seamless network.
                            </div>
                            <div>
                                <span className="font-semibold text-red-500">Insurance-Ready Installations</span> – Installations that meet industry standards and may qualify you for insurance discounts.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gray-100 rounded-xl shadow-inner mb-16 flex items-center justify-center text-gray-500 italic">
                    [ Insert Image of Security Camera or Control Panel Setup ]
                </div>

                {/* Why Choose Us Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
                        Why Choose Black Cat Security
                    </h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                        Because at the end of the day, it’s about trust. From meticulous installation to proactive monitoring,
                        we help you feel safe and secure. Our solutions are built for reliability, backed by expertise, and
                        designed to keep you ahead of threats — whether you're protecting a home or a high-traffic business.
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
