import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import MotionDiv from "../Components/motion.jsx";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ProductDetail from "../Components/ProductDetail";
import products from "../json/products.json";

function Product() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    const { productId } = useParams();
    const product = products.find(
        (x) => x.id === productId
    );

    return (
        <MotionDiv className="container mainLayout">
            <Helmet>
                <title>商品列表</title>
                <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
            </Helmet>
            <Header
                className="layoutHeader"
                title="飲料商品賣場"
                nav="購買資訊"
            />
            <ProductDetail product={product} className="layoutContent" />
            <Footer className="layoutFooter" />
        </MotionDiv>
    );
}

export default Product;