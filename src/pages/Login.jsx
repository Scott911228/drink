import { Layout } from "antd";
import AppHeader from "../Components/Header";
import AppFooter from "../Components/Footer";
import LoginCard from "../Components/LoginCard";

const { Header, Content, Footer } = Layout;

function Login() {
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title="Login Page" />
        </Header>
        <Content className="layout-content">
          <LoginCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Login;
