import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LoginCard from "../Components/LoginCard";


function Login() {
  return (
    <div className="container mainLayout">
      <Header className="layoutHeader" title="飲料商品賣場" nav="" />
      <LoginCard className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>

  );
}

export default Login;
