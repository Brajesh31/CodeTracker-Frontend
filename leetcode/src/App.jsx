import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import  Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<LandingPage/>} />
        <Route path={"/login"} element={<Login user={user} />} />
        <Route path={"/signup"} element={<Signup />} />

        {user ? (
          <>
            <Route path={"/dashboard"} element={<Dashboard user={user}/>} />
            
          </>
        ) : (
          <>""</>
        )}
      </Routes>
    </>
  );


}

export default App;
