import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="max-w-[35.62500rem]">
                <h1 className="text-[#1A1919] text-[5rem] font-extrabold">One Step Closer To Your <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Dream Job</span></h1>
                <p className="text-[#757575] text-lg font-medium mt-6 mb-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div className="">
                    <Link to="/">
                        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-extrabold text-xl normal-case text-white">Get Started</button>
                    </Link>
                </div>
            </div>
            <div className="mt-10">
                <img src="../images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;