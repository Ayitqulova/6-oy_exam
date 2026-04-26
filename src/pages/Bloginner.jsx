import Bloginner1 from "../components/bloginner/Bloginner";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Section7 from "../components/main/Section7";

export default function Bloginner(){

    return(

        <>
        <div className="bg-[#232536]" >
                    <Navbar />
        </div>
        <Bloginner1 />
        <Section7 />
        <Footer />
        </>
    )
}