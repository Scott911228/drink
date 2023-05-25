import { Layout } from "antd";
import AppHeader from "../Components/Header";
import AppFooter from "../Components/Footer";
import RegisterCard from "../Components/RegisterCard";

const { Header, Content, Footer } = Layout;

function Register() {
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title="Register Page" />
        </Header>
        <Content className="layout-content">
          <RegisterCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Register;
