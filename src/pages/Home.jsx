import Header from "../Components/Header"
import Footer from "../Components/Footer"
function Home(){
    return(
        <div className="container mainLayout">
            <Header 
                className="layoutHeader"
                title="飲料商品賣場"
                nav="最健康又養生的飲料都在這裡"
            />
            <ProductList products={products} className="latoutContent"/>
            <Footer className="layoutFooter"/>
        </div>
    );

}

export default Home;