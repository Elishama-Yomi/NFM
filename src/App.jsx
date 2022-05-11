import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import All from "./components/Buy/all";
import Homee from "./components/Buy/home/all";
import Beauty from "./components/Buy/beauty/all";
import Package from "./components/Buy/package/all";
import Recycle from "./components/Buy/recycle/all";
import Contact from "./pages/contact/Contact";
import Categories from "./components/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<All />} />
      <Route path="/products" element={<All />} />
      <Route path="/homeandkitchen" element={<Homee />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/package" element={<Package />} />
      <Route path="/recycle" element={<Recycle />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/pickup" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;