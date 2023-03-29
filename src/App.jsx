import { useState } from 'react'
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Product from './pages/Product';
import './App.css'

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
