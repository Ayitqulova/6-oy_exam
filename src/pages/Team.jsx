import Team1 from "../components/team/team1";
import Navbar from "../components/header/Navbar";
import Section6 from "../components/main/Section6";
import Section8 from "../components/main/Section8";
import Footer from "../components/footer/Footer";
export default function Team(){

    return(
        <>
        <div className="bg-[#232536]">
                       <Navbar />
                   </div>
        <Team1 />
        <Section6 />
        <Section8 />
        <Footer />
        </>
    )
}