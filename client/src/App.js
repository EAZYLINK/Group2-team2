import { Route, Routes} from "react-router-dom"

import Login from "./components/Login";
import Signup from "./components/Signup";
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
// import Doctor from "./components/Doctor";
// import Error from "./components/Error";
// import Home from "./components/Home";
// import Services from "./components/Services";
// import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path='Login' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>

      </Routes>
      {/* <Routes>
      <Route path='/' element={<SharedLayout/>}>
      <Route index element={<Home />}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/register" element={<Register/>}/>
      </Route>
      </Routes> */}
    </div>
  );
}

export default App;
