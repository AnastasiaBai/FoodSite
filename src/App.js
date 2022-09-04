import React from 'react';
import './App.css';
import Home from './routes/Home';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import About from './routes/About';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
