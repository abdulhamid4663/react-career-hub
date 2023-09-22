import { useLoaderData, useParams } from "react-router-dom";
import Details from "../Details/Details";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = Number.parseInt(id);

    const job = jobs.find(job => job.id === idInt);
    
    console.log(job);

    return (
        <div>
            <div className="relative">
                <div className="min-h-[19rem] flex items-center justify-center">
                    <h1 className="text-[#1A1919] text-[2rem] font-extrabold">Job Details</h1>
                </div>
                <img src="../images/bg2.png" alt="" className="absolute -right-72 -top-24" />
                <img src="../images/bg1.png" alt="" className="absolute -left-52 bottom-0" />
            </div>
            <Details job={job}/>
        </div>
    );
};

export default JobDetails;