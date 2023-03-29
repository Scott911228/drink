import{ useParams } from 'react-router-dom';
import Header from "../Components/Header"
import Footer from "../Components/Footer"

function Product(){
    const { productId } = useParams();
    const product = products.find(
        (x)=> x.id === productId
    );

    return(
        <div className="container mainLayout">
            <Header
                className="layoutHeader"
                title=""
                nav=""
            />
            <productDetail product={product} className="layoutContent" />
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Product;