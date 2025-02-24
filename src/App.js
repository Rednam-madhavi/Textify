import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#161616'
      document.body.style.color = '#ffffff'
      // showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'White'
      document.body.style.color = '#000000'
      // showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <Routes>

          <Route path="/" element={
            <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
          } />
          <Route path="/about" element={<About mode={mode}/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;