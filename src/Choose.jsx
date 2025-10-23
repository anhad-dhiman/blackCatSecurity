import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            text: "Their automation setup completely transformed my office workflow everything just works seamlessly now.",
            name: "Jaspreet Singh"
        },
        {
            text: "Professional, fast, and reliable. Our security system has been flawless since installation.",
            name: "Anhad Dhiman"
        },
        {
            text: "Their attention to detail is unmatched. Home automation has never felt this effortless.",
            name: "Gagandeep Singh"
        },
    ];

    return (
        <section className="bg-neutral-400 py-10 px-6 text-white mt-10">
            <h1 className="text-4xl font-bold text-center mb-12 underline underline-offset-8 decoration-4 decoration-red-500">
                What Our Clients Say
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="bg-zinc-900 rounded-2xl p-8 shadow-md hover:shadow-red-500/20 transition-shadow duration-300"
                    >
                        <Quote className="text-red-500 w-8 h-8 mb-4" />
                        <p className="text-gray-300 leading-relaxed mb-6">{t.text}</p>
                        <div className="flex items-center gap-4">
                            <div>
                                <h3 className="text-red-400 font-semibold">{t.name}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
