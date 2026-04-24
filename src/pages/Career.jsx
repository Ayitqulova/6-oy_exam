import Career1 from "../components/Career/Career1";
import Career2 from "../components/career/Career2";
import Career3 from "../components/career/Career3";
import Footer from "../components/footer/footer";
import Navbar from "../components/header/Navbar";
import Section7 from "../components/main/Section7";

export default function Career(){

    return(
        <>
        <div className="bg-[#232536]">
        <Navbar />
        </div>
        <Career1 /> 
        <Career2 />
        <Career3 />
        <Section7 />
        <Footer />
        </>
    )
}