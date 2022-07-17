import React from "react";
import styles from '../../css/footer.module.css'

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.details}>
                    <h5>Pariwisata</h5>
                    <p>Voluptate excepteur consequat laboris eiusmod culpa ea incididunt velit irure occaecat occaecat. Elit consectetur exercitation cupidatat elit. Et officia ex cillum mollit. Ad do aute minim id id ipsum. Consectetur non ut veniam cillum irure dolor esse.</p>
                </div>
                <div className={styles.details}>
                    <h5>Kategori Wisata</h5>
                    <ul>
                        <li><a href="">Alam</a></li>
                        <li><a href="">Budaya</a></li>
                        <li><a href="">Keragaman Hayati</a></li>
                        <li><a href="">Wisata flora & fauna</a></li>
                    </ul>
                </div>
                <div className={styles.details}>
                    <h5>Hubungi Kami</h5>
                    
                </div>

            </div>
        </>
    )
}