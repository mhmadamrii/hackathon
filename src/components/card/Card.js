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
                    <p>lorem ipsum dolor sit ammet</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={borobudur} />
                    <h3>Borobudur</h3>
                    <span>Magelang, Jawa Tengah</span>
                    <p>Deskripsi</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={bali} />
                    <h3>Pure</h3>
                    <span>Tanah Lot, Bali</span>
                    <p>Deskripsi</p>
                </div>
                
            </div>
        </>
    )
};

export default Card;