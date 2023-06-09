import { Layout } from "antd";
import AppFooter from "../Components/Footer";
import ShippingAddressCard from "../Components/ShippingAddressCard";
const { Header, Content, Footer } = Layout;

function Shipping() {
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <ShippingHeader title="Shipping Page" step1 step2 />
        </Header>
        <Content className="layout-content">
          <ShippingAddressCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Shipping;
