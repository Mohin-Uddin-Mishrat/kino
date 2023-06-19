import { RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './common/Navabar/Footer';
import Navbar from './common/Navabar/Navbar';
import Home from './pages/Home/Home';
import Router from './Routes/Router';

function App() {
  return (
    <div className='app flex  items-center justify-center  '>
      <div>
       <RouterProvider router={Router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
