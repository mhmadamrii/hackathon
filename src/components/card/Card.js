import React from "react";
import styles from '../../css/card.module.css'
import borobudur from '../../assets/borobudur.jpg';
import bali from '../../assets/bali.jpg';
import dieng from '../../assets/dieng.jpg'

const Card = () => {
    return (
        <>
            <div className={styles.imageSection}>
                <div className={styles.cardImage}>
                    <img src={dieng} />
                    <h3>Air Panas</h3>
                    <span>Dieng, Jawa Tengah</span>
                    <p>Sebagai negara yang memiliki banyak gunung berapi, Indonesia juga terkenal dengan 'surganya' pemandian air panasnya.</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={borobudur} />
                    <h3>Borobudur</h3>
                    <span>Magelang, Jawa Tengah</span>
                    <p>Borobudur dibangun dengan gaya Mandala yang mencerminkan alam semesta dalam kepercayaan Buddha</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={bali} />
                    <h3>Pure</h3>
                    <span>Tanah Lot, Bali</span>
                    <p>Tanah lot adalah objek wisata Bali yang terdapat pura di atas tebing batu karang berwarna hitam.</p>
                </div>
                
            </div>
        </>
    )
};

export default Card;