import { Link, NavLink } from "react-router-dom";

const Header = () => {
    // const primaryLinearColor = 

    const navLinks = <>
        <li>
            <NavLink className="text-base font-bold" to={`/`}>Home</NavLink>
        </li>
        <li>
            <NavLink className="text-base font-bold" to={`/statistics`}>Statistics</NavLink>
        </li>
        <li>
            <NavLink className="text-base font-bold" to={`/applied`}>Applied Jobs</NavLink>
        </li>
        <li>
            <NavLink className="text-base font-bold" to={`/blog`}>Blog</NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-[2rem] text-[#1A1919] font-extrabold">CareerHub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/" className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-extrabold text-xl normal-case text-white">Apply Now</Link>
            </div>
        </div>
    );
};

export default Header;