import { motion } from "framer-motion";
import ServiceCard from "./components/ServiceCards";
import services from "./services";

export default function ServicesIntro() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const firstRow = services.slice(0, 4)
    const secondRow = services.slice(4)


    return (
        <div className="py-4 flex flex-col justify-center items-center gap-y-5">
            <div className="p-2 grid grid-cols-4 gap-24">
                {firstRow.map(service =>
                    <ServiceCard key={service.id} title={service.title} path={service.path} />
                )}
            </div>
            <div className="p-2 grid grid-cols-3 gap-24">
                {secondRow.map(service =>
                    <ServiceCard key={service.id} title={service.title} path={service.path} />
                )}
            </div>
        </div>
    );
}

