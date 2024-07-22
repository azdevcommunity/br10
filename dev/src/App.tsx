import './App.css'
import { ThemeProvider } from "./ThemeContext.tsx";
import { Outlet } from "react-router-dom";
import LandingPage from "./layouts/landingpage/LandingPage.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
    return (
        <ThemeProvider>
            <div className="dark:bg-gray-900 min-h-screen w-full">
                <Navbar/>
                <LandingPage />
                <Outlet />
            </div>
        </ThemeProvider>
    );
}

export default App;