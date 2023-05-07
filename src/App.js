import Nav from './Nav'
import Landing from './Landing'
import Demo from './Demo'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route path="/" element={<Landing></Landing>}></Route>
    <Route path="/demo" element={<Demo></Demo>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
