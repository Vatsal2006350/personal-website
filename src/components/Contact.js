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
    const [errors, setErrors] = useState({});
    const [focused, setFocused] = useState(null);

    const form = useRef();

    const onFormUpdate = (key, value) => {
        setFormDetails({ ...formDetails, [key]: value });
        if (errors[key]) {
            setErrors({ ...errors, [key]: '' });
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formDetails.from_name.trim()) tempErrors.from_name = "Name is required";
        if (!formDetails.from_email.trim()) tempErrors.from_email = "Email is required";
        if (!formDetails.message.trim()) tempErrors.message = "Message is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setButtonText('Sending...');
            emailjs.sendForm('service_t3aguuo', 'template_eej5egu', form.current, 'dnofV-yc9OTYCzlpD')
                .then((result) => {
                    setStatus({ success: true, message: 'Message sent!' });
                    setButtonText('Send');
                    setFormDetails(formInitialDetails);
                })
                .catch((error) => {
                    setStatus({ success: false, message: 'Failed to send. Please try again.' });
                    setButtonText('Send');
                });
        } else {
            setStatus({ success: false, message: 'Please fill in all fields.' });
        }
    };

    const FloatField = ({ name, label, value, error, onChange, onFocus, onBlur, multiline, placeholder }) => {
        const hasValue = value && value.trim().length > 0;
        const isFocused = focused === name;
        const float = hasValue || isFocused;
        const InputTag = multiline ? 'textarea' : 'input';
        return (
            <div className={`floating-label-form-group ${float ? 'floating-label-form-group-with-value' : ''} ${isFocused ? 'floating-label-form-group-with-focus' : ''}`}>
                <label htmlFor={name}>{label}</label>
                <InputTag
                    id={name}
                    name={name}
                    type={multiline ? undefined : name === 'from_email' ? 'email' : 'text'}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(name, e.target.value)}
                    onFocus={() => onFocus(name)}
                    onBlur={onBlur}
                    rows={multiline ? 5 : undefined}
                />
                {error && <p className="error-message">{error}</p>}
            </div>
        );
    };

    return (
        <section className="contact-section" id="contact">
            <Container>
                <h2>Get in Touch</h2>
                <hr className="star-divider star-divider--light" />
                <Row className="align-items-start">
                    <Col size={12} md={5}>
                        <div className="contact-info">
                            <p>Open to new opportunities, collaborations, and conversations. Reach out — I'll get back to you.</p>
                            <ul>
                                <li>svatsal@umich.edu</li>
                                <li>(+1) 734-834-2993</li>
                            </ul>
                        </div>
                    </Col>
                    <Col size={12} md={7}>
                        <form ref={form} onSubmit={sendEmail} className="floating-label-form">
                            <FloatField
                                name="from_name"
                                label="Name"
                                placeholder="Your name"
                                value={formDetails.from_name}
                                error={errors.from_name}
                                onChange={onFormUpdate}
                                onFocus={setFocused}
                                onBlur={() => setFocused(null)}
                            />
                            <FloatField
                                name="from_email"
                                label="Email"
                                placeholder="your@email.com"
                                value={formDetails.from_email}
                                error={errors.from_email}
                                onChange={onFormUpdate}
                                onFocus={setFocused}
                                onBlur={() => setFocused(null)}
                            />
                            <FloatField
                                name="message"
                                label="Message"
                                placeholder="Your message..."
                                value={formDetails.message}
                                error={errors.message}
                                onChange={onFormUpdate}
                                onFocus={setFocused}
                                onBlur={() => setFocused(null)}
                                multiline
                            />
                            <button type="submit"><span>{buttonText}</span></button>
                        </form>
                        {status.message && (
                            <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
