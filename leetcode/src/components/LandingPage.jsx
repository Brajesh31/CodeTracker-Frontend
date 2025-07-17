import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to CodeTracker
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Keep track of your LeetCode progress effortlessly
          </p>
          <div className="mb-8">
            {/* <svg
              className="h-20 sm:h-24 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="leetcode"
            >
              <path
                fill="#B3B1B0"
                d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
              ></path>
              <path
                fill="#E7A41F"
                d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
              ></path>
              <path
                fill="#070706"
                d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
              ></path>
            </svg> */}
            <img  className="h-20 sm:h-24 mx-auto" src="public/extension-logo.png" alt="logo" />
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://microsoftedge.microsoft.com/addons/detail/cfcmhhhpceojgdlcobapopmehbefnmcp"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300"
            >
              Download Extension
            </a>
            <button
              onClick={() => navigate("/login")}
              className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300"
            >
              Login
            </button>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Features
          </h2>
          <ul className="text-lg text-gray-700">
            <li className="mb-4">Track your LeetCode questions easily</li>
            <li className="mb-4">
              Organize and revise your tracked questions efficiently
            </li>
            <li className="mb-4">
              Seamlessly review your progress and performance
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
