import "./App.css";
import { useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";

// COMPONENTS
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// PAGES
import HomeScreen from "./Pages/HomeScreen";
import AboutPage from "./Pages/AboutPage";

// CONTEXT
import { GithubProvider } from "./Context/GithubContext";
import { ThemeProvider } from "./Context/ThemeContext";

import NotFound from "./Pages/NotFound";
import MyProfile from "./Pages/MyProfile";
function App() {
  // const API = "https://api.github.com/users/emrekaraa"

  return (
    <div className="flex flex-col justify-between h-screen">
      <ThemeProvider>
        <GithubProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </GithubProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
