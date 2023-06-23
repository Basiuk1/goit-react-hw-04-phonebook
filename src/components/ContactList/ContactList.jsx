import PropTypes from 'prop-types';
import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
        id={id}
      />
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
