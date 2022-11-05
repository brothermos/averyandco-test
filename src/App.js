import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";
import Education from "./components/Education";
import Factorial from "./components/Factorial";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/education" element={<Education />} />
                <Route path="/factorial" element={<Factorial />} />
            </Routes>
        </div>
    );
}

export default App;
