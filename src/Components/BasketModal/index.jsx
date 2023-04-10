import { Modal, Button, Select, theme } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems } from "../../redux/cartSlice";
import { addiceItems, removeiceItems } from "../../redux/iceSlice";
import styles from "./basketmodal.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import { selectCartItems } from "../../redux/cartSlice";
import { selecticeItems } from "../../redux/iceSlice";
const { Option } = Select;

export default function BasketModal({ isOpen, toggleModal }) {
   const { token: { colorTextBase } } = theme.useToken();
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   const iceItems = useSelector(selecticeItems);

   const handleCancel = () => toggleModal(!isOpen);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   return (
      <Modal
         title=""
         style={{ width: '50%' }}
         open={isOpen}
         onCancel={handleCancel}
         footer={null}
      >
         {cartItems.length === 0 ? (
            <div className={styles.title}><span>購物車是空的</span></div>

         ) : (
            cartItems.map(item => (
               <li key={item.id} className={styles.item}>

                  <div className={styles.content}>

                     <Link to={`/products/id/${item.id}`}>
                        <div onClick={handleCancel}>
                           <img className={styles.image} src={item.image} alt={item.name} />
                        </div>
                     </Link>
                     <div className={styles.col}>
                        <div className={styles.row1}>
                           <div className={styles.name}>{item.name}</div>
                           <div className={styles.qty}>
                              數量: {"   "}
                              <Select
                                 defaultValue={item.qty}
                                 onChange={(qty) => dispatch(addCartItems({
                                    id: item.id,
                                    name: item.name,
                                    image: item.image,
                                    price: item.price,
                                    countInStock: item.countInStock,
                                    qty,
                                 }))}
                              >
                                 {[...Array(item.countInStock).keys()].map((x) => (
                                    <Option key={x + 1} value={x + 1}>
                                       {x + 1}
                                    </Option>
                                 ))}
                              </Select>
                           </div>
                        </div>

                        <div className={styles.row1}>
                           <div className={styles.ice}>
                              冰塊: {"   "}
                              <Select
                                 defaultValue={item.ice}
                                 onChange={(ice) => dispatch(addiceItems(ice
                                 ))}
                                 options={[
                                    { value: '少冰', label: '少冰' },
                                    { value: '微冰', label: '微冰' },
                                    { value: '正常冰', label: '正常冰' },
                                    { value: '去冰', label: '去冰' }
                                 ]}
                              >
                              </Select>
                           </div>
                        </div>

                        <div className={styles.row1}>
                           <div className={styles.sweet}>
                              甜度: {"   "}
                              <Select
                                 defaultValue={"正常"}
                                 onChange={(sweet) => dispatch((sweet
                                 ))}
                                 options={[
                                    { value: '正常糖', label: '正常糖' },
                                    { value: '少糖', label: '少糖' },
                                    { value: '微糖', label: '微糖' },
                                    { value: '半糖', label: '半糖' },
                                    { value: '無糖', label: '無糖' }
                                 ]}
                              >

                              </Select>
                           </div>
                        </div>

                        <div className={styles.row2}>
                           <div className={styles.price}>
                              <span>價格${item.price * item.qty}元</span>
                           </div>
                           <div className={styles.delete} onClick={() => dispatch(removeCartItems(item.id))}>
                              <span>x</span>
                           </div>
                        </div>
                     </div>

                  </div>

                  <br></br>
                  <div className={styles.horizontalLine}></div>
                  <br></br>
               </li>

            ))
         )}
         <div className={styles.wrap}>
            <div className={styles.totalPrice}><span>總價${getTotalPrice()}元</span></div>
         </div>

         <Button
            className={styles.btn}
            type="primary"
         >
            <FontAwesomeIcon icon={faBagShopping} />
            <span style={{ marginLeft: 12 }}>前往結帳</span>
         </Button>
      </Modal>
   );
}