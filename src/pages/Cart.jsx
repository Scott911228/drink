import{ useParams } from 'react-router-dom';
import Header from "../Components/Header"
import Footer from "../Components/Footer"


function Home(){

    const { productId } = useParams();
    const product = products.find(
        (x)=> x.id === productId
    );
    
    return(
        <div className="container mainLayout">
            <Header 
                className="layoutHeader"
                title="飲料商品賣場"
                nav="最健康又養生的飲料都在這裡"
            />
            <ProductList products={products} className="layoutContent"/>
            <Footer className="layoutFooter"/>
        </div>
    );

}

export default Home;