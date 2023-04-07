import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ProductList from "../Components/ProductList";
import products from "../json/products.json";

function Home() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    const { categoryName } = useParams();
    const _products = !categoryName
        ? products
        : products.filter(
            x => x?.category.toUpperCase() === categoryName.toUpperCase()
        );
    return (
        <div className="container mainLayout">
            <Header
                className="layoutHeader"
                title="飲料商品賣場"
                nav="最健康又養生的飲料都在這裡"
            />
            <ProductList products={products} className="layoutContent" />
            <Footer className="layoutFooter" />
        </div>
    );

}

export default Home;