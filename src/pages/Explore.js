import React from "react";
import Navbar from '../components/navbar/Navbar'
import styles from '../css/explore.module.css'
import bromo from '../assets/bromo.jpg'

const Explore = () => {
    document.title = 'Wisata | Explore'
    return (
        <>
            <Navbar />
            <div className={styles.main}>
                <img src={bromo} width="100%" />
            </div>
        </>
    )
};

export default Explore;