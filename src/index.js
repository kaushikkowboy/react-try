import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./modules/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Founders from "./pages/Founders";
import Nopage from "./pages/Nopage";
import Footer from "./modules/Footer";

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="mkd-wrapper">
        <div className="mkd-content">
          <div className="mkd-content-inner">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/founders" element={<Founders />} />
              <Route path="*" element={<Nopage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);