import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.foot}>
            <hr className={styles.hrFooterLine} />
            <footer className={styles.footer} id='footer'>
                <div className={styles.follow}>
                    {/* <p style={{ fontWeight: 800 }}>跟隨我們</p> */}

                    <ul className={styles.imagelist}>
                        <li className={styles.imagelist_item}>
                            <a href="https://zh-tw.facebook.com/"><img src="images/facebook.jpg" width="60" height="60"></img></a>
                        </li>
                        <li className={styles.imagelist_item}>
                            <a href="https://www.instagram.com/"><img src="images/instagram.jpg" width="60" height="60"></img></a>
                        </li>

                        <li className={styles.imagelist_item}>
                            <a href="https://discord.com/"><img src="images/foodpanda.jpg" width="60" height="60"></img></a>
                        </li>

                        <li className={styles.imagelist_item}>
                            <a href="https://twitter.com/"><img src="images/ubereats.jpg" width="60" height="60"></img></a>
                        </li>

                    </ul>
                </div>
                <div className={styles.content}>
                    <ul className={styles.contentlist}>
                        <li className={styles.contentlist_item}>
                            <p style={{ fontweight: 800 }}>關於我們</p>
                        </li>
                        
                        <li className={styles.contentlist_item}>
                            <p style={{ fontweight: 800 }}>品牌故事</p>
                        </li>

                        <li className={styles.contentlist_item}>
                            <p style={{ fontweight: 800 }}>菜單介紹</p>
                        </li>

                        <li className={styles.contentlist_item}>
                            <p style={{ fontweight: 800 }}>位置資訊</p>
                        </li>

                    </ul>
                </div>

            </footer>
        </div>
    );
}