import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import SignIn from "./components/SignIn";
import SignUpcard from "./components/Signup_card";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUpcard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
