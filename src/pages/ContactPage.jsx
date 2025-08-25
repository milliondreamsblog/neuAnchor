import React from 'react';
import ContactInfo from '../Data/ContactInfo.jsx';
import ContactForm from '../components/ContactUs/ContactForm.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const ContactPage = ({ className = '' }) => {
  return (
    <section>
        <Header />
            <div className={`py-16 px-4 bg-[#E0F0FF] ${className}`}>
                
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <ContactInfo />
                <ContactForm />
                </div>
            </div>
           

            </div>
         <Footer />
    </section>
  );
};

export default ContactPage;