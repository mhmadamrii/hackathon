import styles from '../css/dashboard.module.css'
import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    let navigate = useNavigate()
    const addWisata = () => {
        // navigate('/add-wisata')
    }
    return (
        <>
            <Navbar />
            <div className={styles.container}>
            {/* <Button variant="primary" mb='3' onClick={addWisata}>Add Wisata</Button>{' '} */}
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>No</th>
                <th>Nama Destinasi</th>
                <th>Lokasi</th>
                <th>Photo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Bromo</td>
                <td>Jawa Timur</td>
                <td>bromo.png</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Dieng</td>
                <td>Jawa Tengah</td>
                <td>dieng.jpg</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Tanah Lot</td>
                <td>Bali</td>
                <td>tanahLot.jpg</td>
                </tr>
            </tbody>
    </Table>
            </div>
        </>
    )
};

export default Dashboard;