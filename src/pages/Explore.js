import React from "react";
import Navbar from '../components/navbar/Navbar'
import styles from '../css/explore.module.css'
import bromo from '../assets/bromo.jpg'
import Card from '../components/card/Card'
import {Form, Button} from 'react-bootstrap'

const Explore = () => {
    document.title = 'Wisata | Explore'
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.main}>
                    <img src={bromo} width="100%" />
                </div>

                <div className={styles.explore}>
                <div className={styles.search}>
                        <Form className="d-flex" style={{marginBottom: '10px'}}>
                            <Form.Control
                            type="search"
                            placeholder="e.g: Bromo"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success" style={{padding: '0 40px'}}>Cari</Button>
                        </Form>
                    </div>
                    <div className={styles.cards}>
                        <Card />
                    </div>
                    
                </div>
            </div>
        </>
    )
};

export default Explore;