import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {user && (
        <Route path="/dashboard" element={<Dashboard user={user} />} />
      )}
    </Routes>
  );
}

export default App;
