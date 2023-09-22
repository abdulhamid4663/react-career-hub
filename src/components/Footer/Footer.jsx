import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="py-32 bg-[#1A1919] text-base-content">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
                    <aside className="col-span-2">
                        <Link to="/" className="text-[2rem] font-extrabold text-white">CareerHub</Link>
                        <p className="text-[#FFFFFFB2] text-base font-normal py-5 max-w-[18.75rem]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className="flex gap-4">
                            <Link to="/" className="flex w-11 h-11 justify-center items-center text-2xl rounded-full bg-white"><BiLogoFacebook /></Link>
                            <Link to="/" className="flex w-11 h-11 justify-center items-center text-2xl rounded-full bg-white"><BiLogoTwitter /></Link>
                            <Link to="/" className="flex w-11 h-11 justify-center items-center text-2xl rounded-full bg-white"><BiLogoInstagram /></Link>
                        </div>
                    </aside>
                    <nav className="flex flex-col">
                        <header className="text-xl font-semibold text-white mb-2">Company</header>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">About Us</a>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">Work</a>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">Latest News</a>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">Careers</a>
                    </nav>
                    <nav className="flex flex-col">
                        <header className="text-xl font-semibold text-white mb-2">Product</header>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">Prototype</a>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">Plans & Pricing</a>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">Customers</a>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">Integrations</a>
                    </nav>
                    <nav className="flex flex-col">
                        <header className="text-xl font-semibold text-white mb-2">Support</header>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">Help Desk</a>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">Sales</a>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">Become a Partner</a>
                        <a className="link link-hover text-base text-[#FFFFFFB2] font-normal">Developers</a>
                    </nav>
                    <nav className="flex flex-col">
                        <header className="text-xl font-semibold text-white mb-2">Contact</header>
                        <p className="text-base text-[#FFFFFFB2] font-normal">524 Broadway , NYC <br />
                            +1 777 - 978 - 5570</p>
                    </nav>
                </div>
                <hr />
                <div className="flex justify-between mt-12">
                    <p className="text-sm font-normal text-[#FFFFFF66]">@2023 CareerHub. All Rights Reserved</p>
                    <p className="text-sm font-normal text-[#FFFFFF66]">Powered by <Link to="/" className="font-bold">CareerHub</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;