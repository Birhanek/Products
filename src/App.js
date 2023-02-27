
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Products from './components/Product/Product';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path={`/edit/:id`} element={<EditProduct/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
