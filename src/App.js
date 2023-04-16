import { Route, Routes } from 'react-router-dom';
import '../src/styles/style.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import WishList from './Components/WishList';
import MyCollection from './Components/MyCollection';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/wishlist' element={<WishList></WishList>}></Route>
        <Route path='/mycollection' element={<MyCollection></MyCollection>}></Route>
      </Routes>
    </div>
  );
}

export default App;
