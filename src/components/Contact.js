import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import '../assets/css/Contact.css';

const Contact = () => {
    const formInitialDetails = {
        from_name: '',
        from_email: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const form = useRef();

    const onFormUpdate = (key, value) => {
        setFormDetails({
            ...formDetails,
            [key]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        )
        .then((result) => {
            console.log(result.text);
            setStatus({
                success: true,
                message: 'Message sent successfully!'
            });
            setButtonText('Send');
            setFormDetails(formInitialDetails);
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            setStatus({
                success: false,
                message: `Failed to send message: ${error.text}`
            });
            setButtonText('Send');
        });
    };

    return (
        <section className="contact-section" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={5}>
                        <div className="contact-info">
                            <h2>Let's Connect</h2>
                            <p>I'm always open to new opportunities and collaborations in the world of technology.</p>
                            <ul>
                                <li>Email: svatsal@umich.edu</li>
                                <li>Phone: (+971) 50-806-2831</li>
                            </ul>
                            <p className="subtle-text">Passionate about software engineering and product management, I'm excited to bring innovative solutions to challenging problems.</p>
                        </div>
                    </Col>
                    <Col size={12} md={6}>
                        <h1>Contact me</h1>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col size={12} className="px-1">
                                    <input 
                                        name="from_name" 
                                        type="text" 
                                        value={formDetails.from_name} 
                                        placeholder="Name" 
                                        onChange={(e) => onFormUpdate('from_name', e.target.value)} 
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col size={12} className="px-1">
                                    <input 
                                        name="from_email"
                                        type="email" 
                                        value={formDetails.from_email}
                                        placeholder="Email" 
                                        onChange={(e) => onFormUpdate('from_email', e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col size={12} className="px-1">
                                    <textarea 
                                        name="message" 
                                        rows="6" 
                                        value={formDetails.message} 
                                        placeholder="Message" 
                                        onChange={(e) => onFormUpdate('message', e.target.value)} 
                                    />
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                        {
                            status.message && 
                            <p className={status.success === false ? 'danger' : 'success'}>
                                {status.message}
                            </p>
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;