import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
    return (
        <div className="w-full">
            <div className="p-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="font-light text-sm tracking-wider">
                        <p>© 2024 br10 - All rights reserved</p>
                    </div>
                    <div className="flex space-x-5 mt-4 md:mt-0 justify-center items-center">
                        <span className="hover:underline cursor-pointer">Terms & Conditions</span>
                        <span className="hover:underline cursor-pointer">Privacy Policy</span>
                        <span className="hover:underline cursor-pointer">Cookie Policy</span>
                    </div>
                    <div className="flex space-x-5 mt-4 md:mt-0">
                        <IoLogoInstagram className="w-7 h-7 cursor-pointer" />
                        <IoLogoInstagram className="w-7 h-7 cursor-pointer" />
                        <IoLogoInstagram className="w-7 h-7 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;