import { useParams } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Fullstack1 from "../components/fullstack/Fullstack1";


export default function Fullstack(){
    const { slug } = useParams();
    console.log(slug)
    return(
        <>
            <div className="bg-[#232536]">
                <Navbar />
            </div>
            <Fullstack1 />
            
        </>
    )
}

