import { Link } from "react-router-dom"
import styles from "./header.module.css";
export default function Header({ title, nav }) {
    return (
        <div className={styles.header}>

            <Link to="/" style={{textDecoration:"none"}}>
                <span className={styles.headerTitle}>
                    {title}
                </span>
            </Link>

            <nav className={styles.nav}>
                <ul className={styles.navlist}>

                    <li className={styles.navlist_item}>
                        <a href="#">關於</a>
                    </li>

                    <li className={styles.navlist_item}>
                        <a href="#">產品</a>
                    </li>

                    <li className={styles.navlist_item}>
                        <a href="#">消息</a>
                    </li>

                    <li className={styles.navlist_item}>
                        <a href="#">聯絡</a>
                    </li>

                    <button className={styles.cart_link}>
                        
                    </button>
                </ul>
            </nav>
            <hr className={styles.hrHeaderLine}/>
        </div>
    );

}