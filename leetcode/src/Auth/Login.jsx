import { useState } from "react";
import { auth, GoogleProvider, db } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ user }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      if (auth.currentUser.email != null) {
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, GoogleProvider);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="mx-auto my-10 max-w-md rounded-xl border px-4 py-10 text-gray-700 shadow-lg sm:px-8">
        <div className="mb-16 flex justify-between">
          <span className="font-bold">
            <span className="inline-block  h-3 w-3 bg-blue-600"></span>CodeTracker
          </span>
          <span className="">
          Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:underline"
            >
              Signup
            </Link>
          </span>
        </div>
        <p className="mb-5 text-3xl font-medium">CodeTracker</p>
        <p className="mb-6 text-sm">
          "CodeTracker" implies a platform for storing and revising
          solved DSA questions
        </p>
        <div className="mb-6">
          <div className="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
            <input
              type="email"
              id="email"
              className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
            <input
              type="password"
              id="password"
              className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center gap-4">
  <button
    className="mb-6 mr-1 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
    onClick={Login}
  >
    Login
  </button>
</div>

      </div>
    </>
  );
};

export default Login;