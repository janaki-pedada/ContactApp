import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const handleCreateContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleUpdateContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setEditingContact(null);
  };

  const handleDeleteContact = (contactToDelete) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== contactToDelete.id);
    setContacts(filteredContacts);
    setEditingContact(null);
  };

  const handleEditContact = (contactToEdit) => {
    setEditingContact(contactToEdit);
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm
        onCreateContact={handleCreateContact}
        onUpdateContact={handleUpdateContact}
        contactToEdit={editingContact}
      />
      <ContactList
        contacts={contacts}
        onEditContact={handleEditContact}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
