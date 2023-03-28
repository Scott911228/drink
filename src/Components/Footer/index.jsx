import styles from './footer.module.css';

export default function Footer() {
    return (
        <div>
            <hr className={styles.hrFooterLine} />
            <footer className={styles.footer}>
                <div className={styles.content}>
                    <p></p>
                </div>
                <div className={styles.follow}>
                    <p></p>
                </div>
            </footer>
        </div>
    );
}