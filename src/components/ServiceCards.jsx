
import { Link } from 'react-router-dom'

export default function ServiceCard(props) {
    return (
        <Link
            to={props.path}
            className="flex flex-col items-center justify-center
                h-65 w-55 rounded-lg cursor-pointer transition-all duration-300
                hover:scale-105 hover:shadow-xl
                bg-[url('/systems.jpg')] bg-cover bg-center"
        >
            <div className="bg-black/50 w-full h-full flex items-center justify-center rounded-lg">
                <h2 className="text-white text-xl font-semibold">
                    {props.title}
                </h2>
            </div>
        </Link>
    )
}