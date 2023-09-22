import PropTypes from 'prop-types';
import { AiOutlineDollar } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { HiCalendarDays, HiOutlinePhone, HiEnvelope } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setIdsToLocalStorage } from '../../utility/localstorage';

const Details = ({ job }) => {
    const { id, salary, job_title, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    const { phone, email, address } = contact_information;

    function handleApplyNow(title) {
        toast.success(`${title} applied successfully`);
        setIdsToLocalStorage(id)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 my-32">
            <div className="col-span-4">
                <h1 className='text-[#1A1919] text-base font-bold mb-6'>Job Description: <span className='text-[#757575] font-medium'>{job_description}</span></h1>
                <h1 className='text-[#1A1919] text-base font-bold mb-6'>Job Responsibility: <span className='text-[#757575] font-medium'>{job_responsibility}</span></h1>
                <div className='mb-6'>
                    <h1 className='text-[#1A1919] text-base font-bold mb-4'>Educational Requirements:</h1>
                    <h1 className='text-base text-[#757575] font-medium'>{educational_requirements}</h1>
                </div>
                <div className='mb-6'>
                    <h1 className='text-[#1A1919] text-base font-bold mb-4'>Experiences:</h1>
                    <h1 className='text-base text-[#757575] font-medium'>{experiences}</h1>
                </div>
            </div>
            <div className="col-span-2">
                <div className='p-7 rounded-lg bg-gradient-to-r from-[#7e8ffe1c] to-[#9873ff1c]'>
                    <div>
                        <h1 className='text-[#1A1919] text-xl font-extrabold border-b-2 border-[#7e8ffe2a] pb-6 mb-6'>Job Details</h1>
                        <div className='flex items-center gap-2 mb-4'>
                            <AiOutlineDollar className='text-2xl text-[#7E90FE]' />
                            <h1 className='text-xl text-[#474747] font-bold'>Salary : <span className='text-[#757575] font-medium'>{salary} {"(Per Month)"}</span></h1>
                        </div>
                        <div className='flex items-center gap-2 mb-8'>
                            <HiCalendarDays className='text-2xl text-[#7E90FE]' />
                            <h1 className='text-xl text-[#474747] font-bold'>Job Title : <span className='text-[#757575] font-medium'>{job_title}</span></h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#1A1919] text-xl font-extrabold border-b-2 border-[#7e8ffe2a] pb-6 mb-6'>Contact Information</h1>
                        <div className='flex items-center gap-2 mb-4'>
                            <HiOutlinePhone className='text-2xl text-[#7E90FE]' />
                            <h1 className='text-xl text-[#474747] font-bold'>Phone : <span className='text-[#757575] font-medium'>{phone} {"(Per Month)"}</span></h1>
                        </div>
                        <div className='flex items-center gap-2 mb-4'>
                            <HiEnvelope className='text-2xl text-[#7E90FE]' />
                            <h1 className='text-xl text-[#474747] font-bold'>Email : <span className='text-[#757575] font-medium'>{email}</span></h1>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <SlLocationPin className='text-2xl text-[#7E90FE]' />
                            </div>
                            <h1 className='text-xl text-[#474747] font-bold'>Address : <span className='text-[#757575] font-medium'>{address}</span></h1>
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <button onClick={() => handleApplyNow(job_title, id)} className='text-xl font-extrabold text-white rounded-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-5 w-full'>Apply Now</button>
                </div>
                <ToastContainer 
                    pauseOnHover= {false}
                />
            </div>
        </div>
    );
};

Details.propTypes = {
    job: PropTypes.object
}

export default Details;