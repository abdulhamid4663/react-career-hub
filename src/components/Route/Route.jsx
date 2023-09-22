import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import Blog from "../Blog/Blog";
import JobDetails from "../JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/statistics",
                element: <Statistics />,
            },
            {
                path: "/applied",
                element: <AppliedJobs />,
                loader: () => fetch('../jobs.json')
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "/job/:id",
                element: <JobDetails />,
                loader: () => fetch('../jobs.json')
            }

        ]
    }
]);


export default router;