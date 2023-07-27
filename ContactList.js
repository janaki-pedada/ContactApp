import React from 'react';

const ContactList = ({ contacts, onEditContact, onDeleteContact }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName} ({contact.phoneNumber}, {contact.email})
            <button onClick={() => onEditContact(contact)}>Edit</button>
            <button onClick={() => onDeleteContact(contact)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
