// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Admin from './pages/Admin';

// const App: React.FC = () => {
//     return (
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Login />} />
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/admin" element={<Admin />} />
//                 </Routes>
//             </Router>
//     );
// }

// export default App;

// frontend/src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
