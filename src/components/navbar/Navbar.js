import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../../css/login.module.css';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


// integration
import {API} from '../../config/api';
import { useMutation } from 'react-query';
import { UserContext } from '../../components/context/UserContext'

function NavScrollExample() {
    const navigate = useNavigate();
    // modal login
    const [modalLogin, setModalLogin] = useState(false)
    const toggleModal = () => {
        setModalLogin(!modalLogin)
    }

    // modal register
    const [modalRegister, setModalRegister] = useState(false)
    const toggleRegister = () => {
        setModalRegister(!modalRegister)
    }

    const [state, dispatch ] = useContext(UserContext);
    console.log(state);

    const [message, setMessage] = useState(null);

    // register & login states
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleOnChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value,
        });
        console.log(e.target.value)
    };



    const handleOnLogin = useMutation (async (e) => {
        try {
            e.preventDefault();
            const config = {
                headers: {
                    'Content-type': 'application/json',
                }
            };

            const body = JSON.stringify(form);
            const response = await API.post('/login', body, config);
            const userStatus = response.data.data.status;
            console.log(response.data);
            console.log("successfully logged in as an " + userStatus);


            dispatch ({
                type: 'loginSuccess',
                payload: response.data.data
            });


            if(userStatus === "user") {
                navigate('/')
            } else if (userStatus === 'admin') {
                navigate('/dashboard')
            }

            const alert =(
                <Alert variant="success" className="py-1">
                    Login Success
                </Alert>
            )
            setMessage(alert)
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Login failed
                </Alert>
            )
            setMessage(alert);
            console.log(error.response.data.message)
        }
    })

    const handleOnRegister = useMutation (async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    'Content-type': 'application/json',
                }
            };

            const body = JSON.stringify(form);
            const response = await API.post('/register', body, config);
            console.log(response.data)

        } catch (error) {
            console.log(error);
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed 
                </Alert>
            );
            setMessage(alert);
        }
    })
    
    return (
        <>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Wisata</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/explore">Explore</Nav.Link>
                    </Nav>
                    <Nav>
                        <button 
                        onClick={toggleModal} style={{border: 'none', backgroundColor: 'inherit', padding: '0 20px'}}>
                        Login</button>                    
                        <button 
                        onClick={toggleRegister} style={{border: 'none', backgroundColor: 'inherit', padding: '0 20px'}}>
                        Register</button>                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <div className='login'>
                {modalLogin && (
                    <div className={styles.main}>
                        <div className={styles.close} onClick={toggleModal}>
                        </div>
                        <div className={styles.root}>
                            <h3>Login</h3>

                            <Form.Group className="mb-3" controlId="formBasicEmail"
                            onSubmit={(e) => handleOnLogin.mutate(e)}
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                type="email" 
                                onChange={handleOnChange}
                                value={form.email}
                                name='email'
                                placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                type="password"
                                onChange={handleOnChange}
                                value={form.password}
                                name='password'
                                placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>

                            <center><Form.Text className="text-muted">
                                Have not an account? click <a href="">Here</a>  
                            </Form.Text>                        
                            </center>
                        </div>
                    </div>            
                )}
            </div>
            
            <div className='register'>
                {modalRegister && (
                    <div className={styles.main}>
                    <div className={styles.close} onClick={toggleRegister}>
                    </div>
                    <div className={styles.root}>
                        <h3>Register</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail" 
                        onSubmit={(e) => handleOnRegister.mutate(e)}
                        >
                            <Form.Label>Fullname</Form.Label>
                            <Form.Control 
                            type="text" 
                            onChange={handleOnChange}
                            value={form.fullname}
                            name='fullname'
                            placeholder="Enter name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                            type="email" 
                            onChange={handleOnChange}
                            value={form.email}
                            name='email'
                            placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            onChange={handleOnChange}
                            value='password'
                            placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                        <center><Form.Text className="text-muted">
                            Already have an account? click <a href="">Here</a>  
                        </Form.Text>                        
                        </center>
                    </div>
                </div>      
                )}
            </div>
        </>
    );
}

export default NavScrollExample;