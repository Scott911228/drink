import { Row, Col } from "antd";
import ProductItem from "../ProductItem";
import './productlist.css'

export default function ProductList({ products }) {
    return (
        <div>
            <h2>養生又健康的飲料都在這裡!</h2>
            <Row gutter={[32, 32]}>
                {products.map(product => (
                    <Col
                        key={product.id}
                        lg={8}
                        xs={12}
                    >
                        <ProductItem product={product} />
                    </Col>
                ))}
            </Row>
        </div>

    );
}