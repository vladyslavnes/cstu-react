import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactsPage = () => {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [emailError, setEmailError] = useState('');
    const [feedbackError, setFeedbackError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors and success message
        setEmailError('');
        setFeedbackError('');
        setSuccessMessage('');

        // Validate email and feedback
        let isValid = true;

        if (!isValidEmail(email)) {
            setEmailError('Email is invalid.');
            isValid = false;
        }

        if (!feedback.trim()) {
            setFeedbackError('Feedback is required.');
            isValid = false;
        }

        // If all fields are valid, simulate form submission (you can replace this with your actual submission logic)
        if (isValid) {
            setSuccessMessage('Ваш відгук надіслано!');
            // Here you can implement the logic to send the form data to your server or perform any other necessary actions.
            // For demonstration purposes, we'll just log the data to the console.
            console.log('Email:', email);
            console.log('Your Feedback:', feedback);
        }
    };

    const isValidEmail = (email) => {
        // Simple email validation for demonstration purposes
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <Container className="mt-3">
            <h2>Contact us</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={!!emailError}
                    />
                    <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicFeedback">
                    <Form.Label>Your Feedback</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Your Feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        isInvalid={!!feedbackError}
                    />
                    <Form.Control.Feedback type="invalid">{feedbackError}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send
                </Button>

                {successMessage && <p className="text-success mt-3">{successMessage}</p>}
            </Form>
        </Container>
    );
};

export default ContactsPage;
