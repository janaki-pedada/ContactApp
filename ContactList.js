import React from 'react';
import ContactItem from './ContactItem ';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            contact={contact}
            onEdit={() => onEdit(index)}
            onDelete={() => onDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
