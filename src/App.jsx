import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './assets/Header';
import Htmlblog from './assets/Htmlblog';
import Cssblog from './assets/Cssblog';
import Javascript from './assets/Javascript';
import Reactblog from './assets/Reactblog';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Blogs from './assets/Blogs';
import Blogdet from './assets/Blogdet';

function App() {


  return (
    <>
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<Blogs/>}/>
      <Route path='/html' element={<Htmlblog/>}/>
      <Route path='/css' element={<Cssblog/>}/>
      <Route path='/javascript' element={<Javascript/>}/>
      <Route path='/react' element={<Reactblog/>}/>
      <Route path='/blogdet' element={<Blogdet/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
