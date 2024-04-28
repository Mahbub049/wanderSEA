import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>404 Not Found || Radiant Residences</title>
            </Helmet>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-8xl font-extrabold mb-6">404 Not Found</h1>
                <Link to={'/'} className="btn bg-[#5092da] text-white">Go Back</Link>
            </div>
        </HelmetProvider>
    );
};

export default ErrorPage;