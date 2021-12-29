import React from "react";
import { ImHeartBroken } from "react-icons/im";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container  flex items-center justify-center">
      <ImHeartBroken className="text-10xl" />
      <div className="not-found-text text-3xl text-center mx-9">
        <h2>Uppps... Worng Path</h2>
        <p className="text-2xl mt-2">404 Page Not Found !</p>
        <Link to="/" className="btn mt-4 text-xl">
          Return to HomePage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
