import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge, theme } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import BasketModal from "../BasketModal"
import styles from "./cartsummary.module.css"
import { selectCartItems } from "../../redux/cartSlice";

export default function CartSummary() {
  const { token: { colorTextBase } } = theme.useToken();
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector(selectCartItems);
  const count = (cartItems.length > 0)
    ? cartItems.reduce((sum, item) => sum + item.qty, 0)
    : 0;
  const toggleOpen = () => setIsOpen(!isOpen);
  
  return (
    <>
      <nav onClick={toggleOpen} className={styles.cartSummary} >
        <Badge count={count} color="yellow"  style={{ fontWeight:'bold' , fontSize:'0.8rem' }}>
          <FontAwesomeIcon icon={faCartShopping} className="carticon" size="2xl" />
        </Badge>
      </nav>
      <BasketModal
        isOpen={isOpen}
        toggleModal={toggleOpen}
      />
    </>

  );
}
