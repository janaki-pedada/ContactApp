import React from 'react';

const ContactDelete = ({ onDelete }) => {
  return (
    <button type="button" onClick={onDelete}>
      Delete
    </button>
  );
};

export default ContactDelete;
