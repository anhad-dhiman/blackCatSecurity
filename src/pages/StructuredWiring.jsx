import { Link } from 'react-router-dom';
import services from '../services';
import Feature from '../components/Feature';

export default function StructuredWiring() {
    return (
        <div className="pt-14">
            <h1 className="text-5xl font-bold px-7 mb-6
            underline underline-offset-4 decoration-red-500">
                {services[0].title}
            </h1>
            {
                services[0].features.map((feature, index) => (
                    <Feature
                        key={feature.id}
                        title={feature.title}
                        img={feature.image}
                        desc={feature.description}
                        reverse={index % 2 !== 0}
                    />
                ))
            }
        </div>
    );
}
