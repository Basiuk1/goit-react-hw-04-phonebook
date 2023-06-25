import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ContactForm, FormLabel, FormInput, FormButton } from './Form.styled';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const [number, setNumber] = useState('');

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    onSubmit(name, number);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          value={name}
          onChange={handleChangeName}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          value={number}
          onChange={handleChangeNumber}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </ContactForm>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
};
