import './App.css'
import { ThemeProvider } from "./ThemeContext.tsx";
import { Outlet } from "react-router-dom";
import LandingPage from "./layouts/landingpage/LandingPage.tsx";
import Navbar from "./components/Navbar.tsx";
import NavbarV2 from "@/components/NavbarV2.tsx";

function App() {
    return (
        <ThemeProvider>
            <div className="dark:bg-gray-900 bg-cal-primary min-h-screen w-full">
                {/*<Navbar/>*/}
                <NavbarV2 />
                <LandingPage />
                <Outlet />
            </div>
        </ThemeProvider>
    );
}

export default App;