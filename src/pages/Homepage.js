import Navbar from '../components/navbar/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../css/homepage.module.css';
import Bali from '../assets/bali.jpg';
import Button from 'react-bootstrap/Button';

const Homepage = () => {
    document.title = 'Wisata | Homepage'
    return (
        <>
            <Navbar />
            <Container>
                <Row className={styles.row}>
                    <Col>
                        <h2>Temukan beragam wisata di Indonesia</h2>
                        <p>"Satu-satunya cara untuk bisa menikmati hari-harimu adalah dengan menikmati apa yang kamu kerjakan. Jika kamu mencintai apa yang kamu lakukan, maka ketakutan ketika lepas dari masa liburan tidak akan kamu rasakan tapi justru akan membuat semakin bersemangat."</p>
                        <Button variant="primary">Explore</Button>
                    </Col>
                    <Col className={styles.rowImg}>
                        <img src={Bali} alt='image' />
                    </Col>
                </Row>

                <div className={styles.details}>
                    <center><h2>Keindahan alam di bumi pertiwi</h2></center>
                </div>
            </Container>
            {/* <Login /> */}
        </>
    )
};

export default Homepage