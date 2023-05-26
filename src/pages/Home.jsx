import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import MotionDiv from "../Components/motion.jsx";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ProductList from "../Components/ProductList";
import products from "../json/products.json";
import { Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react';

const supabase = createClient('https://zekspmqanzmaqnuzqtlt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpla3NwbXFhbnptYXFudXpxdGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5OTE3OTIsImV4cCI6MjAwMDU2Nzc5Mn0.-sg1Sjw5clKnOAFfqNxZbZ4OeBWKwX2nMzHvSdgvoIM')
function Home() {
    const [session, setSession] = useState()
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

    }, [])
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    const { categoryName } = useParams();
    const _products = !categoryName
        ? products
        : products.filter(
            x => x?.category.toUpperCase() === categoryName.toUpperCase()
        );
    const title = !categoryName
        ? "飲料商品賣場"
        : _products[0]?.category;

    const effect = {
        hidden: { x: -2000, opacity: 0 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
                ease: 'easeInOut',
            },
        },

        exit: {
            x: 2000,
            opacity: 0,
            transition: {
                duration: 2,
                ease: 'easeInOut',
                opacity: { duration: 1 }
            },
        }
    }

    return (
        <MotionDiv className="container mainLayout">
            <Helmet>
                <title>{title}</title>
                <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
            </Helmet>
            {
                session ? <div className="username"> {session.user.user_metadata.user_name} <button className="logout-link" type="button" onClick={() => supabase.auth.signOut()}>
                    登出
                </button></div> : <Link to={"logIn-page"} className="login-link">
                    <button className="button block" type="button">
                        登入
                    </button>
                </Link>
            }
            <Header
                className="layoutHeader"
                title={title}
                nav="最健康又養生的飲料都在這裡"
            />

            <ProductList products={products} className="layoutContent" />
            <Footer className="layoutFooter" />
        </MotionDiv>
    );

}

export default Home;