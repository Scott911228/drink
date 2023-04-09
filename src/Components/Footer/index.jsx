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
                    <div className={styles.contentlist}>
                        <div className={styles.contentlist_item}>
                            <p style={{ fontweight: 800 }}>關於我們</p>
                        </div>
                        
                        <div className={styles.contentlist_item}>
                            <p style={{ fontweight: 800 }}>品牌故事</p>
                        </div>

                        <div className={styles.contentlist_item}>
                            <p style={{ fontweight: 800 }}>菜單介紹</p>
                        </div>

                        <div className={styles.contentlist_item}>
                            <p style={{ fontweight: 800 }}>位置資訊</p>
                        </div>

                    </div>
                </div>

                <div className={styles.contact}>
                    <div className={styles.contentlist}>
                        <div className={styles.contentlist_item}>
                            <p>電話訂購 : (02)-86666666</p>
                        </div>
                        
                        <div className={styles.contentlist_item}>
                            <p>e-mail : rick3862100@gmail.com</p>
                        </div>

                        <div className={styles.contentlist_item}>
                            <p>地址 : 桃園市中壢區龍川二街134號</p>
                        </div>

                    </div>
                </div>

            </footer>
        </div>
    );
}