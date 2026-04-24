import Company1 from "../components/company/Company1";
import Company2 from "../components/company/Company2";
import Navbar from "../components/header/Navbar";
import Section2 from "../components/main/Section2";
import Company4 from "../components/company/Company4";
import Company5 from "../components/company/Company5";
import Section7 from "../components/main/Section7";
import Footer from "../components/footer/footer";

export default function Company (){

    return(
       <>

      <div className="bg-[#232536]">
            <Navbar />
        </div>
        <Company1 />
        <Company2 />
        <Section2 />
        <Company4 />
        <Company5 />
        <Section7 />
        <Footer />
        
        
       </>
    )
}

