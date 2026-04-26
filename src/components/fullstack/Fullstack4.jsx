export default function Fullstack4(){

    return(
        <section className="w-[80%] mx-auto py-10">
            <h1 className="font-semibold text-[36px] leading-[150%] text-[#232536]">Apply Now</h1>
            <div className="grid grid-cols-2 gap-7 mt-[30px]">

                <input type="text" placeholder="First Name" className=" w-full h-[96px] px-6 outline-none placeholder:text-[##232536] opacity-[0.8] bg-[#F9F9FF] rounded-md" name="" id="" />
                <input type="text" placeholder="First Name" className=" w-full h-[96px] px-6 outline-none placeholder:text-[##232536] opacity-[0.8] bg-[#D2DAED2B] rounded-md" name="" id="" />
                <input type="text" placeholder="First Name" className=" w-full h-[96px] px-6 outline-none placeholder:text-[##232536] opacity-[0.8] bg-[#D2DAED2B] rounded-md" name="" id="" />
                <input type="text" placeholder="First Name" className=" w-full h-[96px] px-6 outline-none placeholder:text-[##232536] opacity-[0.8] bg-[#D2DAED2B] rounded-md" name="" id="" />

            </div>

            <div className="w-full h-[220px] bg-[#D2DAED2B] mt-[30px] py-12 px-10">
                <p className="font-medium text-[18px] leading-[150%] text-[#232536] opacity-[0.8]">Why do you thing you are good fit for Ether?</p>
            </div>

            <div className="mt-[32px] flex items-center gap-3">
                <img src="/images/Checkmark.png" alt="" />
                <p className=" w-[800px] h-[48px] font-normal text-[16px] leading-[150%] opacity-[0.8]">I agree to accept the privacy policy,  We will add your contact details provided in this form to our system for contacting you regarding your request.</p>
            </div>
                <button class=" mt-[60px] relative max-w-75 w-full flex items-center  gap-2 text-white py-5 px-16 bg-[#444CFC]"> Submit Application
                             <img src="/images/Icon.png" alt="" /> <img class="absolute left-0 -top-0" src="/images/Shapes (1).png" alt="" /></button>
        </section>
    )
}
