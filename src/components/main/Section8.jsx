import { Link } from "react-router-dom"
export default function Section8(){

    return(
        <section className="w-[80%] m-auto py-10">
             <div className="mt-[30px] flex justify-between items-center " >
              <div className=" w-[40%]">
                <img className="mb-[20px]" src="/images/Shapes (7).png" alt="" />
                <h1 className=" font-semibold text-5xl text-[#232536] leading-[121%] " >Let's make something special</h1>
                <h4 className="font-semibold text-2xl leading-[150%] text-[#232536] mt-[40px] ">Let's talk! 🤙 </h4>
                <p className="font-medium text-[18px] leading-[156%] text-[#232536] mt-[28px] ">020 7993 2905</p>
                <p className="font-medium text-[18px] leading-[156%] text-[#232536] mt-[4px] ">hi@finsweet.com</p>
                <p className=" font-medium text-[14px] leading-[143%] text-[#232536] mt-[30px]" >DLF Cybercity, Bhubaneswar, 
  <br />India, &52050</p>
            </div>

            
            <div className=" relative flex gap-[60px] ">
                <div>
                <ul className="flex flex-col gap-[12px]">
                    <li><a className="font-semibold text-[16px] leading-[175%] text[#232536] " href="service">Service</a></li>
                    <li><a className="font-semibold text-[16px] leading-[175%] text[#232536] " href="company">Company</a></li>
                    <li><a className="font-semibold text-[16px] leading-[175%] text[#232536] " href="career ">Career </a></li>
                    <li><a className="font-semibold text-[16px] leading-[175%] text[#232536] " href="news">News</a></li>
                    <li><a className="font-semibold text-[16px] leading-[175%] text[#232536] " href="/">Home</a></li>
                </ul>
            </div>

            <div>
                <ul className="flex flex-col gap-[13px]">
                    <li><a className="font-semibold text-[16px] leading-[175%] text[#232536] " href="">Service</a></li>
                    <li><a className="font-medium text-[14px] leading-[143%] text-[#232536] " href="">Technical support</a></li>
                    <li><a className="font-medium text-[14px] leading-[143%] text-[#232536] " href="">Testing</a></li>
                    <li><a className="font-medium text-[14px] leading-[143%] text-[#232536] " href="">Development</a></li>
                    <li><a className="font-medium text-[14px] leading-[143%] text-[#232536] " href="">AWS/Azure </a></li>
                    <li><a className="font-medium text-[14px] leading-[143%] text-[#232536] " href="">Consulting</a></li>
                    <li><a className="font-medium text-[14px] leading-[143%] text-[#232536] " href="">Information Technology</a></li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col gap-[13px]">
                    <li><a className="font-semibold text-[16px] leading-[175%] text[#232536] " href="">Resourses</a></li>
                    <li><a className="font-medium text-[14px] leading-[143%] text-[#232536] " href="">About Us</a></li>
                    <li><a className="font-medium text-[14px] leading-[143%] text-[#232536] " href="">Testimonial</a></li>
                    <li><Link to="/main/policy" className="font-medium text-[14px] leading-[143%] text-[#232536]"  >Privacy Policy</Link></li>
                    <li><a className="font-medium text-[14px] leading-[143%] text-[#232536] " href="">Terms of use </a></li>
                    <li><a className="font-medium text-[14px] leading-[143%] text-[#232536] " href="">Blog</a></li>
                </ul>
            </div>

             <div className="flex absolute gap-[15px] items-center -bottom-20 right-2 " >
         <img className="" src="/images/Shapes (6).png" alt="" />
            <p className="" >Contact Us</p>
            <img className=" w-[20px] " src="/images/Icon (2).png" alt="" />
    </div>
    </div>
          </div>
        </section>
    )
}