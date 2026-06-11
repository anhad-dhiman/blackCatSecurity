export default function Feature({ title, img, desc, reverse }) {
    return (
        <div className="max-w-8xl mx-auto p-6 mt-8">
            <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
                {title}
            </h3>
            <div className={`flex flex-row gap-8 items-center ${reverse ? 'flex-row-reverse' : ''}`}>
                <div className="flex justify-center md:flex-1">
                    <img
                        src={img}
                        alt={title}
                        className="w-full max-w-[600px] h-auto rounded-xl shadow-md object-cover"
                    />
                </div>
                <div className="text-[18px] text-base leading-relaxed text-gray-600 md:flex-1">
                    {desc}
                </div>
            </div>
        </div>
    );
}