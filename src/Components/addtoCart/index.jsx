import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtoCart.module.css"

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: '購買通知',
      description:
        `${qty} 杯 ${product.name} 已加入購物車`,
      placement: 'bottomRight'
    });
  };

  const addtoCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }))
  };
  return (
    <Button type="primary" style={{height:"40px"}} className={styles.btn} onClick={addtoCart}>
      <span>加入購物車</span>
    </Button>
  );
}