import { Route, Routes} from "react-router-dom"
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import ContactUs from "./components/ContactUs";
import Doctor from "./components/Doctor";
import Error from "./components/Error";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Services from "./components/Services";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <div>
      <Routes>
      {/* <Route path='/' element={<SharedLayout/>}>
      </Route> */}
      <Route index element={<Home />}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
