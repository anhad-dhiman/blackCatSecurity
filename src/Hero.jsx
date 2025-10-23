import { useState, useEffect } from 'react';

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/systems.jpg",
            title: "Advanced CCTV Systems",
            description: "State-of-the-art surveillance technology for complete peace of mind."
        },
        {
            image: "/alarm.jpeg",
            title: "Smart Alarm Solutions",
            description: "Intelligent security systems designed to protect what matters most."
        },
        {
            image: "/cctv.jpg",
            title: "24/7 Security Monitoring",
            description: "Round-the-clock protection for your home and business."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                ))}

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white max-w-4xl px-6">
                        <h1 className="text-5xl md:text-6xl mb-6 tracking-wide font-bold">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="text-lg md:text-2xl font-medium text-gray-200 mb-8">
                            {slides[currentSlide].description}
                        </p>
                        <button className="btn btn-outline border-white text-white hover:bg-red-600 hover:border-red-600 text-lg px-8 py-3 font-medium transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                            ? 'bg-red-600 w-8'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                    />
                ))}
            </div>

            {/* Optional: Navigation Arrows */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-red-600 transition"
            >
                ❮
            </button>
            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-red-600 transition"
            >
                ❯
            </button>
        </div>
    );
}

export default Hero;