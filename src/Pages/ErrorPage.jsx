import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-blue-500 to-blue-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Animated snowflakes */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className={`absolute w-2 h-2 bg-white rounded-full animate-snowflake`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! There's Nothing here...</p>

        <Link to={"/"}>
          <button className="btn bg-white text-blue-900 font-bold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform">
            Go Back Home
          </button>
        </Link>
        <p className="mt-6 text-lg font-medium italic">
          * The page you are looking for is not found ❄️
        </p>
      </div>

      <style>
        {`
          @keyframes snowflake {
            from {
              transform: translateY(-100px);
            }
            to {
              transform: translateY(100vh);
            }
          }
          .animate-snowflake {
            animation: snowflake linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ErrorPage;