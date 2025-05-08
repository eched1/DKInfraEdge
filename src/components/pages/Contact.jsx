import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../common/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | DKInfraEdge</title>
        <meta name="description" content="Contact DKInfraEdge for your IT solutions." />
      </Helmet>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-8">Feel free to reach out to us for any inquiries or support.</p>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
