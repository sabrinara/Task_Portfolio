import AB from "../../../public/asserts/about_me.png"
import UX from "../../../public/asserts/ux_progress.png"
import Web from "../../../public/asserts/w-progress.png"
import App from "../../../public/asserts/app_progress.png"
import Gra from "../../../public/asserts/gd_progress.png"
import Image from "next/image";

const AboutMe = ({ isDark }) => {
    const aboutData = [
        {
            id: 1,
            tech: "UX",
            image: UX,
        },
        {
            id: 2,
            tech: "Website Design",
            image: Web,
        },
        {
            id: 3,
            tech: "App Design",
            image: App,
        },
        {
            id: 1,
            tech: "Graphics Design",
            image: Gra,
        },
    ]
    return (
        <div className="my-16 md:mx-10" id="about">
             
            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="w-1/2 relative">
                    <Image src={AB} alt=""  className="w-fit"/>
                    <div className="bg-[#FD6F0099] absolute ml-auto py-3 lg:py-9 w-[35vh] lg:w-[40vh] top-[12vh] lg:top-[13vh] 2xl:top-[13vh] px-0 lg:px-10 right-[38vh] lg:right-1/2  translate-x-1/2 "></div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center mx-10">
                <div >
                    <h1 className="font-bold text-2xl md:text-[65px] lg:mb-8">About Me</h1>
                    <p className="font-extralight text-sm md:text-[21px] mb-10">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
               
                    {
                        aboutData.map((about) => (
                            <div key={about.id} className="mt-2">
                                <h1>{about.tech}</h1>
                                <Image src={about.image} alt="" />
                            </div>
                        ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;