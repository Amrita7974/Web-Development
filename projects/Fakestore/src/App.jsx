
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Product from './pages/Product';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Product' element={<Product/>}/>
     </Routes>
     </BrowserRouter>
    </>
   
  );
};

export default App;