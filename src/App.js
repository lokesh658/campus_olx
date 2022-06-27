import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Edit } from './components/editview';
import { Navbar } from './components/navbar/navbar';
import { Profile } from './components/profile';
import {Buyhistory} from './components/buyhistory';
import {Sellhistory} from './components/sellhistory';

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path='/'element={<Profile/>}></Route>
        <Route path='editview' element={<Edit/>}></Route>
        <Route path='buyhistory' element={<Buyhistory/>}></Route>
        <Route path='sellhistory' element={<Sellhistory/>}></Route>
     </Routes>
    </>
  );
}

export default App;
