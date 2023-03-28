import Header from "../components/Header"
import Footer from "../components/Footer"
function Home(){
    return(
        <div className="container mainLayout">
            <Header 
                className="layoutHeader"
                title=""
                nav=""
            />
            <ProductList products={products} className="latoutContent"/>
            <Footer className="layoutFooter"/>
        </div>
    );

}

export default Home;