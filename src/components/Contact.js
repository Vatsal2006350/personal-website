import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/Contact.css';

const Contact = () => {
    const formInitialDetails = {
        from_name: '',
        from_email: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send Message');
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
                    setStatus({ success: true, message: 'Message sent successfully!' });
                    setButtonText('Send Message');
                    setFormDetails(formInitialDetails);
                })
                .catch((error) => {
                    setStatus({ success: false, message: 'Failed to send. Please try again.' });
                    setButtonText('Send Message');
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
            {/* Headline */}
            <div className="contact-hero">
                <h1 className="contact-headline hero-text-gradient">Let's connect.</h1>
                <p className="contact-sub">Interested in product, engineering, or leadership roles — always open to conversations with teams building at scale.</p>
            </div>

            {/* Two-column layout: Info + Form */}
            <div className="contact-grid">
                {/* Left: Info */}
                <div className="contact-info">
                    <div className="contact-info-block">
                        <span className="contact-info-label">Email</span>
                        <a className="contact-info-value" href="mailto:svatsal@umich.edu">
                            svatsal@umich.edu
                        </a>
                    </div>

                    <div className="contact-info-block">
                        <span className="contact-info-label">Phone</span>
                        <a className="contact-info-value" href="tel:+17348342993">
                            (+1) 734-834-2993
                        </a>
                    </div>

                    <div className="contact-info-block">
                        <span className="contact-info-label">Location</span>
                        <span className="contact-info-value">Ann Arbor, Michigan</span>
                    </div>

                    <div className="contact-info-block">
                        <span className="contact-info-label">Availability</span>
                        <span className="contact-info-value contact-info-avail">
                            <span className="contact-avail-dot" />
                            Open to opportunities
                        </span>
                    </div>

                    <div className="contact-socials">
                        <a href="https://www.linkedin.com/in/vatsal-shah-a7a0b1255/" target="_blank" rel="noreferrer" className="contact-social-link">
                            LinkedIn <span>↗</span>
                        </a>
                        <a href="https://github.com/Vatsal2006350" target="_blank" rel="noreferrer" className="contact-social-link">
                            GitHub <span>↗</span>
                        </a>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="contact-form-wrap">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="contact-form-row">
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
                        </div>
                        <FloatField
                            name="message"
                            label="Message"
                            placeholder="Tell me about the role or opportunity..."
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
                </div>
            </div>
        </section>
    );
};

export default Contact;
