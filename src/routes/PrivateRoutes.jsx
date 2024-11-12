import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {


    const {user,loader} = useContext(AuthContext);

    if(loader){
        return <div className="flex gap-2 justify-center"><span className="loading loading-ring loading-md"></span><span className="loading loading-ring loading-md"></span><span className="loading loading-ring loading-md"></span><span className="loading loading-ring loading-md"></span></div>
    }

    if(user){
        return children;
    }


    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoutes;