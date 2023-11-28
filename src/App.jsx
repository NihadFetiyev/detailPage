import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/contact';
import Home from './pages/home';
import Detail from './components/detail';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact  />} />
            <Route path="detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
