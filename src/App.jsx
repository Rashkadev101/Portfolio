import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
