import { useEffect, useState } from "react";
import AppliedJobsList from "../AppliedJobsList/AppliedJobsList";
import { useLoaderData } from "react-router-dom";
import { getStoredIdsInLocalStorage } from "../../utility/localstorage";
import { SlArrowDown } from "react-icons/sl"


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [jobsApplied, setJobsApplied] = useState([]);
    const [displayAppliedJobs, setDisplayAppliedJobs] = useState([]);

    useEffect(() => {
        const storedIds = getStoredIdsInLocalStorage();
        if (storedIds.length > 0) {
            const appliedJobs = jobs.filter(job => storedIds.includes(job.id));
            setJobsApplied(appliedJobs);
            setDisplayAppliedJobs(appliedJobs);
        }
    }, [jobs]);

    function handleFilterJobs(filter) {
        if(filter === "all") {
            setDisplayAppliedJobs(jobsApplied);
        }
        if(filter === "remote") {
            const remoteFilteredJobs = jobsApplied.filter(job => job.remote_or_onsite === "Remote");
            setDisplayAppliedJobs(remoteFilteredJobs);
        }
        if(filter === "onsite") {
            const onsiteFilteredJobs = jobsApplied.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayAppliedJobs(onsiteFilteredJobs);
        }
    }

    return (
        <div className="my-32">
            <div className="relative">
                <div className="min-h-[19rem] flex items-center justify-center">
                    <h1 className="text-[#1A1919] text-[2rem] font-extrabold">Applied Jobs</h1>
                </div>
                <img src="../images/bg2.png" alt="" className="absolute -right-72 -top-24" />
                <img src="../images/bg1.png" alt="" className="absolute -left-52 bottom-0" />
            </div>
            <div className="text-end mb-8">
                <details className="dropdown">
                    <summary className="m-1 btn text-xl font-semibold text-[#474747] bg-[#F4F4F4] normal-case">Filter By <SlArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=> handleFilterJobs("all")}><a>All</a></li>
                        <li onClick={()=> handleFilterJobs("remote")}><a>remote</a></li>
                        <li onClick={()=> handleFilterJobs("onsite")}><a>onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {
                    displayAppliedJobs.map(job => <AppliedJobsList key={job.id} job={job} />)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;