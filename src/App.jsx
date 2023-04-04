import { useState } from 'react'
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="products">
          <Route path="category/:categoryName" element={<Home />} />
          <Route path="id/:productId" element={ <Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
