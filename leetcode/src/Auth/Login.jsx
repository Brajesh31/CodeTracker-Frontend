import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      if (credential.user) {
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.code === "auth/network-request-failed") {
        setErrorMessage("Unable to connect. Check your internet connection and try again.");
      } else {
        setErrorMessage("Sign-in failed. Check your email and password, then try again.");
      }
    }
  };

  return (
    <main className="mx-auto my-10 max-w-md rounded-xl border px-4 py-10 text-gray-700 shadow-lg sm:px-8">
      <div className="mb-12 flex items-center justify-between gap-4">
        <span className="font-bold">
          <span className="mr-2 inline-block h-3 w-3 rounded-full bg-blue-600" />
          CodeTracker
        </span>
        <span className="text-sm">
          Do not have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Sign up
          </Link>
        </span>
      </div>

      <h1 className="mb-3 text-3xl font-semibold text-gray-900">Welcome back</h1>
      <p className="mb-8 text-sm text-gray-600">
        Sign in to review the coding questions associated with your account.
      </p>

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="login-email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label htmlFor="login-password" className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="login-password"
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {errorMessage && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Sign in
        </button>
      </form>
    </main>
  );
};

export default Login;
