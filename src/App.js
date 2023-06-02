import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Pages/Home';
import Haqqimizda from './Components/Pages/Haqqimizda';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/haqqimizda" element={<Haqqimizda/>}/>
    <Route path="/aksiyalar" element={<Haqqimizda/>}/>
    <Route path="/teklifler" element={<Haqqimizda/>}/>
    <Route path="/sosial" element={<Haqqimizda/>}/>
    <Route path="/dəyərlərimiz" element={<Haqqimizda/>}/>
    <Route path="/karyera" element={<Haqqimizda/>}/>
    <Route path="/əlaqə" element={<Haqqimizda/>}/>
    </Routes>
    </div>
  );
}

export default App;
