import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import URLShrinkerForm from "./components/URLShrinkerForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

    <Routes>
        <Route path="/" element={<URLShrinkerForm />} />
        <Route path="/about" element={<About />}  />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
