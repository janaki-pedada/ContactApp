import React, { useState, useEffect } from 'react';

const ContactForm = ({ onCreateContact, onUpdateContact, contactToEdit }) => {
  const [formData, setFormData] = useState({
    id: null,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  useEffect(() => {
    if (contactToEdit) {
      setFormData(contactToEdit);
    } else {
      setFormData({
        id: null,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
      });
    }
  }, [contactToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      onUpdateContact(formData);
    } else {
      onCreateContact({ ...formData, id: Date.now() });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <br/>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <br/>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <br/>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <br/>
      <button type="submit">{formData.id ? 'Update Contact' : 'Create Contact'}</button>
    </form>
  );
};

export default ContactForm;
