import { Link } from 'react-router-dom';
import styles from './productitem.module.css';

export default function ProductItem({ product }) {

   return (
      <div className={styles.item}>
         <Link to={`/products/id/${product.id}`}>
            <img
               className={styles.image}
               style={{ width: '80%', height: "380px"}}
               src={product.image}
               alt={product.name} />
         </Link>
         <br></br> <br></br>
         <div className={styles.info}>
            <h1 className={styles.name}>
               {product.name}
            </h1>
            <div className={styles.more}>
               <span
                  className={styles.textGray}>
                  {product.price}元 &nbsp;
               </span>
               <Link to={`/products/id/${product.id}`} className={styles.link}>
                  查看更多...
               </Link>
            </div>
         </div>
      </div>
   );
}