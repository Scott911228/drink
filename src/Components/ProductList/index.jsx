import {Row,Col} from "antd";
import ProductItem from "../ProductItem";

export default function ProductList({Products}) {
    return(
        <Row gutter={[32,32]}>
        {Products.map(product =>(
            <Col
                key={product.id}
            >
                <ProductItem product={product}/>
            </Col>
        ))}
        </Row>
    );
}