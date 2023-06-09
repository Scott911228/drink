import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { Provider } from "react-redux";
import { HelmetProvider } from 'react-helmet-async'
import { StyleProvider } from '@ant-design/cssinjs';
import store from './redux/store';
import { darkTheme, lightTheme } from './theme';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/register';
import Shipping from './pages/Shipping';
// import { feedProducts } from './api';
// feedProducts();
function App() {

  return (
    <Provider store={store}>
      <ConfigProvider theme={lightTheme} >
        <HelmetProvider context={{}}>
          <BrowserRouter>
            <StyleProvider hashPriority="high">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path="products">
                  <Route path="category/:categoryName" element={<Home />} />
                  <Route path="id/:productId" element={<Product />} />
                </Route>
                <Route path='logIn-page' element={<Login />} />
                <Route path='register-page' element={<Register />} />
                <Route path='shipping-page' element={<Shipping />} />
              </Routes>
            </StyleProvider>
          </BrowserRouter>
        </HelmetProvider>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
