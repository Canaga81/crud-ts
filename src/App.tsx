import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';
import Read from './pages/Read';
import Update from './pages/Update';


function App() {

  return (

    <>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/read/:id' element={<Read />} />
        <Route path='/update/:id' element={<Update />} />

      </Routes>

    </>

  );

}

export default App;