import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Content from "../Components/Content";
import MotionDiv from "../Components/motion.jsx";

function about() {

    return (
        <MotionDiv className="container mainLayout">
            <Header
                className="layoutHeader"
                title="飲料商品賣場"
                nav=""
            />
            <Content className="layoutContent" />
            <Footer className="layoutFooter" />
        </MotionDiv>
    );

}

export default about;