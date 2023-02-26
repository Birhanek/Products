
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <header>Welcome to the page</header>
        <BrowserRouter>
          <Routes>
            <Route path='/products' element={<EditProduct/>}/>
            <Route path={`/edit/:id`} element={<Add/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
