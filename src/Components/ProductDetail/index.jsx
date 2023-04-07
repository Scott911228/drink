import { Row, Col, Select} from "antd";
import AddToCart from "../addtoCart";
import { useState } from 'react';
const { Option } = Select;
import styles from "./productdetail.module.css";


export default function ProductDetail({ product }) {
    const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
    const ice = (value) => {
        console.log('selected $[value]');
    };
    const sweet = (value) => {
        console.log('selected $[value]');
    };
    return (
        <Row gutter={[32, 32]}
            style={{ justifyContent: 'center' }}

        >
            <Col
                xs={{ span: 24 }}
                lg={{ span: 6 }}
            >
                <img
                    alt={product.name}
                    className={styles.image}
                    src={product.image}
                />
            </Col>
            <Col
                xs={{ span: 24 }}
                lg={{ span: 14 }}
            >
                <div className={styles.info} >
                    <h2 className={styles.category} >
                        {product.category}
                    </h2>
                    <h1 className={styles.name} >
                        {product.name}
                    </h1>
                    <p className={styles.description}>
                        {product.description}
                    </p>
                    <div className={styles.wrap}>
                        <p className={styles.pricename} >
                            {product.pricename}元
                        </p>
                        <p className={styles.status}>
                            庫存: {product.countInStock > 0 ? "尚有" : "缺貨"}
                        </p>
                        <div className={styles.qty}>
                            數量: {"   "}
                            <Select
                                defaultValue={qty}
                                key={qty}
                                className={styles.amount}
                                onChange={val => setQty(val)}
                            >
                                {[...Array(product.countInStock).keys()].map((x) => (
                                    <Option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                        <br></br>
                        <div className={styles.ice}>
                            冰塊:{"  "}
                            <Select
                                defaultValue={"正常冰"}
                                style={{ width: 50 }}
                                onChange={ice}
                                options={[
                                    { value: '少冰', label: '少冰' },
                                    { value: '微冰', label: '微冰' },
                                    { value: '正常冰', label: '正常冰' },
                                    { value: '去冰', label: '去冰' }
                                ]}>
                            </Select>
                        </div>
                        <br></br>
                        <div className={styles.sweet}>
                            甜度:{"  "}
                            <Select
                                defaultValue={"正常甜"}
                                style={{ width: 70 }}
                                onChange={sweet}
                                options={[
                                    { value: '正常糖', label: '正常糖' },
                                    { value: '少糖', label: '少糖' },
                                    { value: '微糖', label: '微糖' },
                                    { value: '半糖', label: '半糖' },
                                    { value: '無糖', label: '無糖' }
                                ]}>
                            </Select>
                        </div>
                        <br></br>
                        <p className={styles.qty}>
                            總價格: {product.price * qty}
                        </p>
                        <AddToCart product={product} qty={qty} />
                    </div>
                </div>
            </Col>
        </Row>
    );
}
