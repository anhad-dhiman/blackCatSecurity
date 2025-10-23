function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-gray-200 p-8 flex flex-col items-center justify-center">
            <div className="max-w-4xl text-center">
                <h1 className="text-5xl font-extrabold mb-6 text-white">
                    About <span className="text-red-500">Black Cat Security</span>
                </h1>
                <p className="text-lg leading-relaxed mb-6 text-gray-300">
                    Established in <span className="font-semibold text-white">2008</span>,
                    <span className="text-red-500 font-semibold"> Black Cat Security </span>
                    has been safeguarding homes and businesses for over
                    <span className="font-semibold text-white"> 15 years</span>.
                    We specialize in protecting what matters most — your home, business, and peace of mind.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-300">
                    With cutting-edge technology, expert installation, and
                    reliable <span className="text-red-500 font-semibold">24/7 monitoring</span>,
                    we ensure that safety, trust, and reliability come first.
                    Our mission is simple: to provide top-tier security solutions
                    that combine innovation with real-world dependability.
                </p>
                <p className="text-lg text-gray-400 italic">
                    “Your safety isn’t just our job — it’s our promise.”
                </p>
            </div>
        </div>
    );
}

export default About;
