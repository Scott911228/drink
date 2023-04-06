import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className={styles.foot}>
            <hr className={styles.hrFooterLine} />
            <footer className={styles.footer} id='footer'>
                <div className={styles.follow}>
                    {/* <p style={{ fontWeight: 800 }}>跟隨我們</p> */}

                    <ul className={styles.imagelist}>
                        <li className={styles.imagelist_item}>
                            <a href="https://zh-tw.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2xl" className='icon' /></a>
                        </li>
                        <li className={styles.imagelist_item}>
                            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size='2xl' className='icon' /></a>
                        </li>

                        <li className={styles.imagelist_item}>
                            <a href="https://discord.com/"><FontAwesomeIcon icon={faDiscord} size="xl" className='icon' /></a>
                        </li>

                        <li className={styles.imagelist_item}>
                            <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} size="2xl" className='icon' /></a>
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