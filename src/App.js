import LandingPage from "./Pages/LandingPage";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "../node_modules/react-router-dom/dist/main";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element = {<LandingPage/>} />
        <Route exact path ="/login" element = {<LogInPage/>} />
        <Route exact path ="/signup" element = {<SignUpPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
