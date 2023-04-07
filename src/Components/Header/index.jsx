import { Link } from "react-router-dom"
import styles from "./header.module.css";
import CartSummary from "../CartSummary";

export default function Header({ title, nav }) {
    return (
        <div className={styles.header}>

            <Link to="/" style={{ textDecoration: "none" }}>
                <span className={styles.headerTitle}>
                    {title}
                </span>
            </Link>
            <br></br> <br></br>
            <span className={styles.headernav}>
                {nav}
            </span>

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
                    <div>
                        <CartSummary />
                    </div>
                </ul>
            </nav>

            <hr className={styles.hrHeaderLine} />
        </div>
    );

}