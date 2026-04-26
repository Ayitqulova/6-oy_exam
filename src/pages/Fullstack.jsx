import { useParams } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Fullstack1 from "../components/fullstack/Fullstack1";
import Fullstack4 from "../components/fullstack/Fullstack4";
import Footer from "../components/footer/Footer";
import Section7 from "../components/main/Section7";


export default function Fullstack(){
    const { slug } = useParams();
    console.log(slug)
    return(
        <>
            <div className="bg-[#232536]">
                <Navbar />
            </div>
            <Fullstack1 />
            <Fullstack4 />
            <Section7 />
            <Footer />
            
        </>
    )
}

