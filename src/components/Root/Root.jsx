import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="container mx-auto px-4">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;