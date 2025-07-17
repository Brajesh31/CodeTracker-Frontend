import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import AllQuestions from "./AllQuestions";

const Dashboard = ({ user }) => {
  let navigate = useNavigate();
  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <span className="font-bold text-2xl text-white">
                  <span className="inline-block h-3 w-3 bg-white mr-2 rounded-full"></span>
                  CodeTracker
                </span>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="#"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600"
                  >
                    All your questions in one page
                  </Link>
                  <a
                    href="https://resource-tracker.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600"
                  >
                    Other Resources
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                onClick={signOutUser}
                className="font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
            >
              CodeTracker
            </Link>
            <a
              href="https://resource-tracker.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
            >
              Interview Prep Resources
            </a>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Welcome, {user?.displayName || "User"}!
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Here are your questions:
              </p>
            </div>
            <div className="border-t border-gray-200">
              <AllQuestions user={user} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
