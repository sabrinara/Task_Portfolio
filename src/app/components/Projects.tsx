import Image from "next/image";
import P1 from "../../../public/asserts/projects/p_1.png";
import P2 from "../../../public/asserts/projects/p_2.png";
import P3 from "../../../public/asserts/projects/p_3.png";
import Title from "./shared/Title";


const Projects = () => {
    const projectsData = [
        {
            id: 1,
            text: "Web Design",
            des: "AirCalling Landing Page Design",
            image: P1
        },
        {
            id: 2,
            text: "Web Design",
            des: "Business Landing Page Design",
            image: P2
        },
        {
            id: 1,
            text: "Web Design",
            des: "Ecom Web Page Design",
            image: P3
        },


    ]
    return (
        <div className="mb-10 md:mb-40 mx-10 md:mx-20" id="projects">

            <Title title="My Projects" subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />


            <div className="grid grid-cols-5 md:grid-cols-5 gap-2 md:gap-3 text-black text-[10px] md:text-[16px] text-center md:mx-44 ">
                <button className="bg-white px-4 py-2 rounded-md border border-gray-300">All</button>
                <button className="bg-white px-4 py-2 rounded-md border border-gray-300">UI/UX</button>
                <button className="bg-[#FD6F00] text-white px-4 py-2 rounded-md border border-gray-300">Web Design</button>
                <button className="bg-white px-4 py-2 rounded-md border border-gray-300">App Design</button>
                <button className="bg-white px-4 py-2 rounded-md border border-gray-300">Graphic Design</button>
            </div>


            <div className="grid grid-cols-1 mt-14 gap-6 lg:grid-cols-3 md:grid-cols-2">
                {
                    projectsData.map((project) => (
                        <div className="rounded-xl" key={project.id}>
                            <Image src={project.image} alt="" className=""/>
                            <h4 className="mt-5 mb-2 text-xl md:text-base font-normal text-[#FD6F00] ">{project.text}</h4>
                            <p className="font-bold text-lg ">
                                {project.des}
                            </p>
                        </div>
                    ))}


            </div>
        </div>
    );
};

export default Projects;