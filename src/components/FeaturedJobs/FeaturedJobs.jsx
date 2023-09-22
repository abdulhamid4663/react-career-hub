import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [jobsLength, setJobsLength] = useState(4);

    useEffect(() => {
        async function loadFeaturedJobs() {
            const res = await fetch('../jobs.json');
            const data = await res.json();

            setFeaturedJobs(data);
        }

        loadFeaturedJobs();

    }, []);

    return (
        <div className="my-32">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-[#1A1919] mb-4">Featured Jobs</h1>
                <p className="text-base font-medium text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    featuredJobs.slice(0, jobsLength).map(job => <FeaturedJob key={job.id} job={job} />)
                }
            </div>
            <div className={`text-center ${jobsLength === featuredJobs.length ? "hidden" : ""}`}>
                <button onClick={() => setJobsLength(featuredJobs.length)} className="py-5 px-7 rounded-lg text-xl font-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] mt-10">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;