import { Link } from "react-router-dom"
import styles from "./header.module.css";
export default function Header({ title, nav }) {
    return (
        <div className={styles.header}>
            <p className={styles.headernav}>
                {nav}
            </p>
        </div>
    );

}