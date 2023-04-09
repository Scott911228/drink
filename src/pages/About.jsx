import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Content from "../Components/Content";
import imageList from "../json/imageList.json"

function about() {
    return (
        <div className="container mainLayout">
            <Header
                className="layoutHeader"
                title="飲料商品賣場"
                nav=""
            />
            <Content className="layoutContent" />
            <Footer className="layoutFooter" />
        </div>
    );

}

export default about;