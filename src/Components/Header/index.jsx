import 'animate.css';
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import CartSummary from "../CartSummary";
import logo from '../../assets/logo.png';

export default function Header({ title, nav }) {
    return (
        <div className={styles.header}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <img className="animate__animated animate__fadeInUp animate__delay-0.5s" src={logo} alt="title" width="120px" />
            </Link>
            <br></br> <br></br>
            <span className={styles.headernav}>
                {nav}
            </span>

            <nav className={styles.nav}>
                <ul className={styles.navlist}>
                    <li className={styles.navlist_item}>
                        <Link to={`/about`}>
                            關於
                        </Link>
                    </li>

                    <li className={styles.navlist_item}>
                        <Link to={'/'}>
                            產品
                        </Link>
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