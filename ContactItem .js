import React from 'react';
import ContactDelete from './ContactDelete';

const ContactItem = ({ contact, onEdit, onDelete }) => {
  return (
    <li>
      {contact.firstName} {contact.lastName} - {contact.phoneNumber} - {contact.email}{' '}
      <button type="button" onClick={onEdit}>
        Edit
      </button>
      <ContactDelete onDelete={onDelete} />
    </li>
  );
};

export default ContactItem;
