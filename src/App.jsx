
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { Provider } from "react-redux";
import store from './redux/store';

import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';


function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="products">
          <Route path="category/:categoryName" element={<Home />} />
          <Route path="id/:productId" element={ <Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
