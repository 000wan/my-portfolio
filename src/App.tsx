import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/header";
import HomePage from "./pages/home";
import Footer from "./pages/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
