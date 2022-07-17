import Navbar from '../components/navbar/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../css/homepage.module.css';
import Bali from '../assets/bali.jpg';
import Button from 'react-bootstrap/Button';
import fakeImg from '../assets/fake1.jpg';
import fakeImg2 from '../assets/fake2.jpg';
import Footer from '../components/footer/Footer';

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
                    <div className={styles.highlight}>
                        <div className={styles.mainHighlight}>
                            <div className={styles.highLeft}>
                                <img src={fakeImg} />
                            </div>

                            <div className={styles.highRight}>
                                <h4>Temukan hal menarik di penjuru Indonesia</h4>
                                <p>Keindahan alam yang dimiliki Indonesia membuatnya diakui dunia sebagai negara terindah di dunia. Memiliki Pantai, Gunung, Tempat Bersejarah dan Wahana Atraksi yang ada di Indonesia yang siap kalian kunjungi kapan saja.</p>
                            </div>
                        </div>

                        <div className={styles.mainHighlight}>
                            <div className={styles.highRight}>
                                <h4>Pesona budaya, melambangkan citra baik bangsa</h4>
                                <p>Kita bergantung pada alam tidak hanya untuk kelangsungan hidup fisik kita. Kita juga membutuhkan alam untuk menunjukkan kita jalan pulang, jalan keluar dari penjara pikiran kita sendiri</p>
                            </div>
                            <div className={styles.highLeft}>
                                <img src={fakeImg2} />
                            </div>
                        </div>

                        <div className={styles.super}>
                            <h2><center>Jelajahi Indonesia dengan video ini</center></h2>
                            <p>Keindahan alam Indonesia yang dikenal dunia merupakan suatu kebanggaan bagi kita yang harus selalu kita jaga</p>
                            <div className={styles.iframe}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/teLKdgOOlhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div className={styles.desc}>
                                    <div className={styles.descLeft}>
                                        <h3>Pesona Indonesia</h3>
                                        <p>Aliquip consectetur non fugiat culpa reprehenderit officia est excepteur dolore commodo pariatur. Officia enim officia excepteur id quis in cillum laborum non ea. Aliquip esse consequat id voluptate est cupidatat irure amet nostrud nulla pariatur culpa ullamco ea. Sit cillum minim ipsum sit cillum ipsum pariatur consectetur commodo ipsum. Mollit aliquip labore ullamco ex exercitation est ipsum irure non voluptate. Et elit aliquip ea qui.</p>
                                    </div> 

                                    <div className={styles.descRight}>
                                        <h3>Kemegahan Indonesia</h3>
                                        <p>Aliquip consectetur non fugiat culpa reprehenderit officia est excepteur dolore commodo pariatur. Officia enim officia excepteur id quis in cillum laborum non ea. Aliquip esse consequat id voluptate est cupidatat irure amet nostrud nulla pariatur culpa ullamco ea. Sit cillum minim ipsum sit cillum ipsum pariatur consectetur commodo ipsum. Mollit aliquip labore ullamco ex exercitation est ipsum irure non voluptate. Et elit aliquip ea qui.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.map}>
                        </div>

                    </div>
                </div>
            </Container>
                {/* <Footer /> */}
        </>
    )
};

export default Homepage