import styles from './footer.module.css';

export default function Footer() {
    return (
        <div>
            <hr className={styles.hrFooterLine} />
            <footer className={styles.footer}>
                <div className={styles.content}>
                    <p style={{fontweight:800}}>關於我們</p>
                </div>
                <div className={styles.follow}>
                    <p style={{fontWeight: 800}}>跟隨我們</p>

                    <ul className={styles.imagelist}>
                    <li className={styles.imagelist_item}>
                        <a href="https://zh-tw.facebook.com/"><img src="public\images\facebook.icon.jpg" width="60" height="60"></img></a>
                    </li>
                    <li className={styles.imagelist_item}>
                        <a href="https://www.instagram.com/"><img src="public\images\instagram.icon.jpg" width="60" height="60"></img></a>
                    </li>

                    <li className={styles.imagelist_item}>
                        <a href="https://www.foodpanda.com.tw/"><img src="public\images\foodpanda.icon.jpg" width="60" height="60"></img></a>
                    </li>

                    <li className={styles.imagelist_item}>
                        <a href="https://www.ubereats.com"><img src="public\images\ubereats.icon.jpg" width="60" height="60"></img></a>
                    </li>

                </ul>
                </div>
            </footer>
        </div>
    );
}