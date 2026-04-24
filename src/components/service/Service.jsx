import Footer from "../footer/Footer";
import Section4 from "../main/Section4";
import Section7 from "../main/Section7";
import Service1 from "./Service1";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Service5 from "./Service5";
import Service6 from "./Service6";
import Service7 from "./Service7";

export default function ServiceMain(){

    return(
        <>
            
            <Service1 />
            <div className="bg-[#F9F9FF]"><Section4 /></div>
            <Service3 />
            <Service4 />
            <Service5 />
            <Service6 />
            <Service7 />
            <Section7 />
            <Footer />
        </>
    )
}
