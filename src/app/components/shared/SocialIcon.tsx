
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const SocialIcon = () => {
    const iconData = [
        {
            id: 1,
            image: <FaFacebook />
        },
        {
            id: 2,
            image: <FaTwitter />
        },
        {
            id: 3,
            image: <FaInstagram />
        },
        {
            id: 4,
            image: <FaLinkedin />
        },
    ]
    return (
        <div className="flex justify-center items-center gap-4 text-xl md:text-3xl">
            {
                iconData.map((iData) => (
                    <div key={iData.id} className="mt-1">
                       <h1>{iData.image}</h1>
                    </div>
                ))}
        </div>
    );
};

export default SocialIcon;