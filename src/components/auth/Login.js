import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../../css/login.module.css'

const Login = () => {
    return (
        <>
            <h1>Hi there</h1>
            <div className={styles.main}>
                <div className={styles.root}>
                    <h1>Login</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                    <center><Form.Text className="text-muted">
                        Already have an account? click <a href="">Here</a>
                    </Form.Text>
                    </center>
                </div>
            </div>
        </>
    )
};

export default Login;