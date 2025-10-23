function Abt() {
    return (
        <section className=" text-black py-12 px-6 text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-4 underline underline-offset-8 decoration-4 decoration-red-500">About Us</h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed">
                At <span className="text-red-500 font-semibold">Black Cat Security</span>, with over 15 years of experience
                we specialize in protecting what matters most your home, business, and peace of mind. With cutting-edge technology, expert installation,
                and 24/7 monitoring, we ensure that safety and reliability come first.
            </p>
            <a
                href="/about"
                className="inline-block mt-6 px-6 py-2 text-white font-medium bg-red-600 rounded-full hover:bg-red-800 transition"
            >
                Learn More →
            </a>
        </section>

    )
};
export default Abt;