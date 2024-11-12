import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="text-center space-y-3 mt-8">
            <div className="flex justify-center">
            <img className="rounded-2xl" src={user?.photoURL} alt="" />
            </div>
            <h2 className="text-3xl">Name: <span className="font-bold">{user?.displayName}</span></h2>
            <p>Email: {user?.email}</p>
            <p>{user?.phoneNumber}</p>
            
        </div>
    );
};

export default Profile;