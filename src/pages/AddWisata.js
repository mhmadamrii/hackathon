import React from "react";
import Navbar from '../components/navbar/Navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../css/addWisata.module.css';
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { API } from "../config/api";
import { useNavigate } from "react-router-dom";

const AddWisata = () => {
    let navigate = useNavigate();
    const [wisata, setWisata] = useState({
        nama: '',
        desc: '',
        lokasi: '',
        photo: '',
        streetView: ''
    })

    const handleChange = (e) => {
        setWisata({
            ...wisata, 
            [e.target.name]:
            e.target.type === 'file' ? e.target.files : e.target.value,
        })
        console.log(e.target.value)
    }

    const handleSubmit = useMutation (async(e) => {
        try {
            e.preventDefault();
        
            // API configuration
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                    'Authorization': `Bearier ${localStorage.token}`
                },
            };
        
            // store all data from user
            const formData = new FormData();
            formData.set('photo', wisata.photo[0], wisata.photo[0].name);
            formData.set('name', wisata.name);
            formData.set('desc', wisata.desc);
            formData.set('lokasi', wisata.lokasi);
            formData.set('streetView', wisata.streetView);
        
            // Insert wisata data
            const response = await API.post('/wisata', formData, config);
            console.log(response);
        
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
    })

    useEffect(() => {
        console.log(wisata)
    }, [wisata])

    document.title = "Wisata | Tambah Wisata"
    return (
        <>
            <Navbar />
            <div className={styles.form}>
            <Form
            onSubmit={(e) => handleSubmit.mutate(e)}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama Wisata</Form.Label>
                    <Form.Control 
                    type="text" 
                    onChange={handleChange}
                    value={wisata.nama}
                    name='nama'
                    placeholder="e.g: Bromo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control 
                    type="text"
                    onChange={handleChange}
                    value={wisata.deskripsi}
                    name='desc'
                    placeholder="e.g: Tempat yang menyenangkan" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Lokasi</Form.Label>
                    <Form.Control 
                    type="text" 
                    onChange={handleChange}
                    value={wisata.lokasi}
                    name='lokasi'
                    placeholder="e.g: Jawa Barat" />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Foto Wisata</Form.Label>
                    <input 
                    type="file"
                    onChange={handleChange} 
                    value={wisata.photo} 
                    name='photo'
                    placeholder="e.g: gunung.png" />
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Street Views</Form.Label>
                    <Form.Control 
                    type="text" 
                    onChange={handleChange}
                    value={wisata.streetView}
                    name='streetView'/>
                </Form.Group>
                <Button variant="primary" navigate='/dashboard' type="submit">Add Wisata</Button>
            </Form>
            </div>
        </>
    )
};

export default AddWisata;