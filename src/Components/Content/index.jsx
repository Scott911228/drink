import styles from "./content.module.css"
import shop from 'drink/public/images/shop.jpg';

export default function Content(){
    return (
        <div className={styles.container}>

            <div className="aboutUs">
                <img src={shop} alt="" />

            </div>
        </div>
    );
}