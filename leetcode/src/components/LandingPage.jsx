import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-lg bg-white p-6 shadow-lg sm:p-10">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Welcome to CodeTracker
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Keep track of your coding-practice questions and revisit your saved records.
          </p>

          <div className="mb-8">
            <img
              className="mx-auto h-20 sm:h-24"
              src="/extension-logo.png"
              alt="CodeTracker browser extension logo"
              width="96"
              height="96"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://microsoftedge.microsoft.com/addons/detail/cfcmhhhpceojgdlcobapopmehbefnmcp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white transition duration-300 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Download extension
            </a>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="rounded-lg border-2 border-blue-600 bg-transparent px-6 py-3 text-lg font-medium text-blue-700 transition duration-300 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign in
            </button>
          </div>
        </div>

        <section className="mt-12" aria-labelledby="features-heading">
          <h2 id="features-heading" className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            What you can do
          </h2>
          <ul className="list-inside list-disc space-y-3 text-lg text-gray-700">
            <li>Review coding-practice questions associated with your account.</li>
            <li>Revisit saved question links and their difficulty and topic details.</li>
            <li>Access your question list after signing in.</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default LandingPage;
