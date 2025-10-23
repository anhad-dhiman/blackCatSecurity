import { motion } from "framer-motion";

export default function ServicesIntro() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const services = [
        { title: "Structured Wiring", desc: "Future-proof cabling that keeps every device in your space connected and ready for upgrades." },
        { title: "Security Systems", desc: "High-definition surveillance and smart alerts for total peace of mind—anytime, anywhere." },
        { title: "Home Automation", desc: "Seamless control of lighting, climate, and appliances directly from your phone or voice assistant." },
        { title: "Intercom Solutions", desc: "Crisp, modern communication systems connecting every corner of your property." },
        { title: "Audio & Video", desc: "Professional installations that bring theater-quality sound and visuals to your home or business." },
        { title: "Networking", desc: "Reliable, high-speed wired and wireless connectivity that powers your smart ecosystem." },
        { title: "Central Vacuum Systems", desc: "Built-in cleaning solutions that combine power, quiet operation, and convenience." },
    ];

    return (
        <>
            <section className="max-w-5xl mx-auto text-center mt-12 px-4">
                <h1 className="text-5xl font-bold text-red-500 mb-6 underline underline-offset-8 decoration-4 decoration-red-500">
                    Automation & Security Services
                </h1>

                <motion.p
                    className="text-lg text-gray-700 leading-relaxed mb-8"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                >
                    From advanced automation to cutting-edge security, we design <span className="font-semibold text-red-600"> intelligent environments </span>
                    that blend comfort, control, and protection all tailored to your lifestyle or business needs.
                </motion.p>

                <motion.div
                    className="text-left space-y-5 mt-10 text-lg"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.10 }}
                >
                    {services.map((s, i) => (
                        <motion.p
                            key={i}
                            className="text-gray-800"
                            variants={fadeUp}
                            transition={{ duration: 0.30 }}
                        >
                            <span className="font-semibold text-red-500">• {s.title}:</span> {s.desc}
                        </motion.p>
                    ))}
                </motion.div>
            </section>
        </>
    );
}

