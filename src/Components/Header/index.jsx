import 'animate.css';
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import CartSummary from "../CartSummary";
import logo from '../../assets/logo.png';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";

const supabase = createClient('https://zekspmqanzmaqnuzqtlt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpla3NwbXFhbnptYXFudXpxdGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5OTE3OTIsImV4cCI6MjAwMDU2Nzc5Mn0.-sg1Sjw5clKnOAFfqNxZbZ4OeBWKwX2nMzHvSdgvoIM')

export default function Header({ title, nav }) {

    const [session, setSession] = useState()
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

    }, [])

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
                            商品
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
                    <div className={styles.user}>
                        {
                            session ? <div style={{ marginLeft: "0px" }} className="username">


                                <span onClick={() => supabase.auth.signOut()}>
                                    <div className={styles.user_content1}><span>登出</span></div>
                                    <FontAwesomeIcon icon={faUser} className="avatar" size="xl" />
                                    {session.user.user_metadata.user_name}
                                </span>
                            </div> : <Link to={"logIn-page"} className={styles.login_link}>
                                <div className={styles.user_content2}><span>登入</span></div>
                                <FontAwesomeIcon icon={faUser} className="avatar" size="xl" />
                            </Link>
                        }
                    </div>

                </ul>
            </nav>

            <hr className={styles.hrHeaderLine} />
        </div>
    );


}
