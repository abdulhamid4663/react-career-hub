import { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";


const JobCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        async function loadCategories() {
            const res = await fetch('../categories.json');
            const data = await res.json();
            setCategories(data);
        }

        loadCategories()
    }, []);
    
    return (
        <div className="my-32">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-[#1A1919] mb-4">Job Category List</h1>
                <p className="text-base font-medium text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {
                    categories.map(category => <JobCategory key={category.id} category={category}/>)
                }
            </div>
        </div>
    );
};

export default JobCategories;