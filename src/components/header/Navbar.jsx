import { Link } from "react-router-dom";

export default function Navbar(){
    return( 
        <nav className="w-[80%] mx-auto flex items-center justify-between py-10 ">
                <img className="w-[122px]" src="/images//Logo.svg" alt="" />
                <div>
                    <ul className=" flex gap-8">
                        <li>
                            <Link to="/">
                                <span className="text-white text-[16px] font-normal ">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/service">
                                <span className="text-white opacity-60">Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/company">
                                <span className="text-white opacity-60">Company</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/career">
                                <span className="text-white opacity-60">Career</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog">
                                <span className="text-white opacity-60">Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <span className="text-white opacity-60">Contact us</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/clone project">
                                <span className="flex gap-2 items-center text-[#FFD3AF] ">Clone project <img src="./images/Icon.png"
                                        alt="" /></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}