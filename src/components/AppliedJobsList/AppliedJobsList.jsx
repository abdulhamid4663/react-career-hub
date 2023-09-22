import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJobsList = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="border-2 rounded-lg flex items-center p-7 gap-8">
            <div className='bg-slate-300 w-[15rem] h-[15rem] flex items-center justify-center rounded-lg'>
                <div>
                    <img src={logo} alt={`image of ${job_title}`} className='px-8' />
                </div>
            </div>
            <div className='flex-grow'>
                <h1 className='text-[#474747] text-2xl font-extrabold mb-2'>{job_title}</h1>
                <h2 className='text-[#757575] text-2xl font-semibold mb-4'>{company_name}</h2>
                <div className='flex gap-4 my-4 mb-6'>
                    <button className='py-2 px-5 text-base font-extrabold border-2 border-[#7E90FE] rounded-md'>{remote_or_onsite}</button>
                    <button className='py-2 px-5 text-base font-extrabold border-2 border-[#7E90FE] rounded-md'>{job_type}</button>
                </div>
                <div className='flex gap-6 mb-7'>
                    <h1 className='flex gap-2 items-center text-[#757575] text-xl font-semibold'><GrLocation /> <span>{location}</span></h1>
                    <h1 className='flex gap-2 items-center text-[#757575] text-xl font-semibold'><AiOutlineDollar /> <span>Salary : {salary}</span></h1>
                </div>
            </div>
            <Link to={`/job/${id}`}>
                <button className='text-xl font-extrabold text-white py-3 px-4 rounded-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>View Details</button>
            </Link>
        </div>
    );
};

AppliedJobsList.propTypes = {
    job: PropTypes.object
}

export default AppliedJobsList;