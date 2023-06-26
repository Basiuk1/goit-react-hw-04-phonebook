import React, { useState, useEffect } from 'react';
import Form from '../Form';
import ContactList from '../ContactList/ContactList';
import Filter from '../FilterContacts/FilterContacts';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { Container, Title, Section } from './App.styled';

export default function App() {
  const contactArray = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const storage = () => JSON.parse(window.localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(storage ?? contactArray);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (existingContact(name)) {
      Notiflix.Report.warning('Warning', `${name} is already in contacts.`);
    } else {
      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };

  const existingContact = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContact();

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form onSubmit={addContact} />
      <Section>Contacts</Section>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Container>
  );
}
