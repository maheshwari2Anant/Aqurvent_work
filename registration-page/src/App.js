import SignUp from "./SignUp";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar/Navbar"
import Footer from "./Navbar/footer/Footer"
import "./App.css";
import RegistrationPage from "./components/StudentRegister/StudentRegister.jsx"
import JobSeekerHP from "./JobSeekerHP";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      {/* <Route index element={ <Navbar/>}/> */}
        {/* <Route index element={<SignUp/>}/> */}
        {/* <Route index element={ <JobSeekerHP/>}/> */}
        {/* <Route index element={ <Footer/>}/> */}
       <Route index element={ <RegistrationPage/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
