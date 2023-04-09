import styles from "./content.module.css"
import shop from '../../../src/assets/shop.jpg';
import tea from '../../../src/assets/tea.jpg'

export default function Content() {
    return (
        <div className={styles.container}>

            <div className={styles.aboutUs}>
                <img className={styles.shop} src={shop} alt="shop" />
                <div className={styles.desc}>
                    <div className={styles.aboutTit}>
                        <span>關於我們</span>
                    </div>

                    <div className={styles.horizontal_line}></div>

                    <div className={styles.aboutDesc}>
                        <span>位於永和竹林路上的小小店家,靠著老闆對飲茶文化獨到的見解以及實在的用料，
                            在在地饕客中豎立起良好的口碑。</span>
                    </div>
                </div>
            </div>

            <div className={styles.ideal}>
                <div className={styles.desc}>
                    <div className={styles.idealTit}>
                        <span>經營理念</span>
                    </div>

                    <div className={styles.horizontal_line}></div>

                    <div className={styles.idealDesc}>
                        <span>堅持選用純天然食材及本土台灣茶，所有飲料品項均自然無添加。
                            讓客人喝得到新鮮、喝得到健康就是老闆的堅持。</span>
                    </div>
                </div>
                <img className={styles.tea} src={tea} alt="shop" />

            </div>
        </div>
    );
}