import{ useParams } from 'react-router-dom';
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ProductDetail from "../Components/ProductDetail";
import products from "../json/products.json";

function Product(){
    const { productId } = useParams();
    const product = products.find(
        (x)=> x.id === productId
    );

    return(
        <div className="container mainLayout">
            <Header
                className="layoutHeader"
                title="飲料商品賣場"
                nav="購物車"
            />
            <ProductDetail product={product} className="layoutContent" />
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Product;