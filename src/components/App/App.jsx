import React, { useState, useEffect } from 'react';
import Form from '../Form';
import ContactList from '../ContactList/ContactList';
import Filter from '../FilterContacts/FilterContacts';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { Container, Title, Section } from './App.styled';

const App = () => {
  const contactArray = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const storage = () => JSON.parse(window.localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(storage ?? contactArray);

  const [filter, setFilter] = useState('');

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

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
};
// class App extends React.Component {
//   state = {
//     contacts: [
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// // componentWillUnmount() {}

// addContact = ({ name, number }) => {
//   const newContact = { name, number, id: nanoid() };
//   const existingContact = this.state.contacts.find(
//     contact => contact.name === name
//   );

//   if (existingContact) {
//     Notiflix.Report.warning('Warning', `${name} is already in contacts.`);
//   } else {
//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }));
//   }
// };

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// changeFilter = event => {
//   this.setState({ filter: event.currentTarget.value });
// };

// getVisibleContact = () => {
//   const normalizedFilter = this.state.filter.toLowerCase();
//   return this.state.contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

//   render() {
//     const { filter } = this.state;

//     const visibleContacts = this.getVisibleContact();
// return (
//   <Container>
//     <Title>Phonebook</Title>
//     <Form onSubmit={this.addContact} />
//     <Section>Contacts</Section>
//     <Filter value={filter} onChange={this.changeFilter} />
//     <ContactList
//       contacts={visibleContacts}
//       onDeleteContact={this.deleteContact}
//     />
//   </Container>
// );
//   }
// }

export default App;
