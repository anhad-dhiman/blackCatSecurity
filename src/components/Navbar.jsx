import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function Navbar() {
    return (
        <div className="navbar bg-red-600 shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="flex-1">
                <img src="/logo.jpg" className="h-16 me-3 rounded" alt="BlackCat Logo" />
            </div>

            <div className="navbar-end">
                <Link to="/" className="mx-4 btn btn-ghost text-xl text-white hover:bg-red-500 border-red-600">Home</Link>
                <Link to="/about" className="mx-4 btn btn-ghost text-xl text-white hover:bg-red-500 border-red-600">About Us</Link>
                <div className="dropdown dropdown-hover">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost m-1 text-xl text-white hover:bg-red-500 border-red-600 flex items-center gap-2"
                    >
                        Services
                        <ChevronDown size={20} />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-black rounded-box z-1 w-40 p-2 shadow-lg border">
                        <li><Link to="/services/structuredwiring" className="text-white hover:bg-red-500 ">Structured Wiring</Link></li>
                        <li><Link to="/services/securitysystems" className="text-white hover:bg-red-500">Security Systems</Link></li>
                        <li><Link to="/services/homeautomation" className="text-white hover:bg-red-500">Home Automation</Link></li>
                        <li><Link to="/services/intercomsystems" className="text-white hover:bg-red-500">Intercom</Link></li>
                        <li><Link to="/services/audiovideo" className="text-white hover:bg-red-500">Audio & Video</Link></li>
                        <li><Link to="/services/networking" className="text-white hover:bg-red-500">Networking</Link></li>
                        <li><Link to="/services/centralvacuum" className="text-white hover:bg-red-500">Vacuum System</Link></li>
                    </ul>
                </div>
                <Link to="/contact" className="mx-4 btn btn-ghost text-xl text-white hover:bg-red-500 border-red-600">Contact Us</Link>
            </div>
        </div>
    );
}

export default Navbar;