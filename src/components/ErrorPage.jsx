import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const location = useNavigate();
    return (
        <div className="flex flex-col gap-2 justify-center items-center w-full min-h-screen">
            <h2 className="text-3xl font-bold">404</h2>
            <p className="text-xl">The Page You Are Looking For Is Not Found.</p>
            <Link className="text-xl btn border-white" to={location(location-1)}>Go Home</Link>
        </div>
    );
};

export default ErrorPage;