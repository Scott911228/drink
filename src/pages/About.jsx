import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

function about() {
    return (
        <div className="container mainLayout">
            <Header
                className="layoutHeader"
                title="飲料商品賣場"
                nav="最健康又養生的飲料都在這裡"
            />
            <div  className="layoutContent" >

            </div>
            <Footer className="layoutFooter" />
        </div>
    );

}

export default about;