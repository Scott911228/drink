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
                </div>
            </footer>
        </div>
    );
}