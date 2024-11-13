import { Link } from "react-router-dom";
import heroImage from "../assets/images/firebase-hero.jpg";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-orange-400">
            Welcome to Firebase Auth
          </h1>
          <p className="mb-5">
            Master the art of authentication with Firebase and React Router.
            Learn how to implement seamless login and registration
            functionalities in your web applications.
          </p>
          <Link to="/login">
            <button className="btn btn-primary">Log In Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
