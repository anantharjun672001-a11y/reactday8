import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Create from './pages/Create';
import Notfound from './pages/Notfound';
import Home from './pages/Home';

const App = () => {
  const [id,setId] = useState(0)

  return (
    <div>
      <BrowserRouter>
          <div>
              <Navbar />
          </div>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/create' element={<Create />}/>
              <Route path='/edit/:id' element={<Edit id={id}/>} />
              <Route path='*' element={<Notfound/>}/>
          </Routes>
          <div>
              <Footer/>
          </div>
      </BrowserRouter>
    </div>
  );
};

export default App;