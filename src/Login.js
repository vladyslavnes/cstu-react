import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const Login = () => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLoginClick = () => {
        // Validate email and password
        if (password.length > 8 && isValidEmail(email)) {
            // Simulate a successful login (you can implement your actual login logic here)
            setLoginError('');
            console.log('Login successful!');
            // Close the modal after successful login
            setShowModal(false);
        } else {
            // Display error if login fails
            setLoginError('Invalid email or password.');
        }
    };

    const isValidEmail = (email) => {
        // Simple email validation for demonstration purposes
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Login
            </Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        {loginError && <p className="text-danger">{loginError}</p>}

                        <Button variant="primary" onClick={handleLoginClick}>
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Login;
