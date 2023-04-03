import { Row, Col } from "antd";
import ProductItem from "../ProductItem";

export default function ProductList({ Products }) {
    return (
        <Row gutter={[32, 32]}>
            {Products.map(product => (
                <Col
                    key={product.id}
                    sm={{ span: 12 }} 
                    lg={{ span: 8 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 4 }}
                >
                    <ProductItem product={product} />
                </Col>
            ))}
        </Row>
    );
}