import { Row, Col } from "antd";
import ProductItem from "../ProductItem";

export default function ProductList({ products }) {
    return (
        <Row gutter={[32, 32]}>
            {products.map(product => (
                <Col
                    key={product.id}
                    lg={{ span: 8 }}
                >
                    <ProductItem product={product} />
                </Col>
            ))}
        </Row>
    );
}