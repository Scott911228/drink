import Header from "../Components/Header";
import Footer from "../Components/Footer";
import RegisterCard from "../Components/RegisterCard";

function Register() {
  return (
    <div className="container mainLayout">
      <Header className="layoutHeader" title="飲料商品賣場" nav="" />
      <RegisterCard className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>

  );
}

export default Register;
