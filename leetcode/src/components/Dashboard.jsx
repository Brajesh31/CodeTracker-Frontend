import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import AllQuestions from "./AllQuestions";

const Dashboard = ({ user }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Unable to sign out:", error.code || "unknown-error");
    }
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-indigo-700 hover:text-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
              >
                <svg
                  className={isMobileMenuOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
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
                  className={isMobileMenuOpen ? "block h-6 w-6" : "hidden h-6 w-6"}
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

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white">
                  <span className="mr-2 inline-block h-3 w-3 rounded-full bg-white" />
                  CodeTracker
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <span className="rounded-md px-3 py-2 text-sm font-medium text-white">
                    All your questions in one page
                  </span>
                  <a
                    href="https://resource-tracker.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-indigo-600"
                  >
                    Other resources
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                onClick={signOutUser}
                className="rounded-md bg-indigo-600 px-3 py-2 font-medium text-white hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        <div
          className={isMobileMenuOpen ? "block sm:hidden" : "hidden sm:hidden"}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <span className="block rounded-md px-3 py-2 text-base font-medium text-white">
              CodeTracker
            </span>
            <a
              href="https://resource-tracker.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-600"
            >
              Interview prep resources
            </a>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <section className="overflow-hidden bg-white shadow sm:rounded-lg" aria-labelledby="dashboard-title">
            <div className="px-4 py-5 sm:px-6">
              <h1 id="dashboard-title" className="text-lg font-medium leading-6 text-gray-900">
                Welcome, {user?.displayName || "User"}!
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Here are the coding questions associated with your account.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <AllQuestions user={user} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
