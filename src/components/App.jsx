import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

   // handleFormSubmit = event => {
  //   const { name, number } = event;

  //   const includesName = this.state.contacts.find(
  //     contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  //   );

  //   if (includesName) {
  //     return Notify.warning(
  //       `${name} is already in contacts`,{
  //         position: 'center-center',
  //       }
  //     );
  //   } else {
  //     let contact = { id: nanoid(), name: name, number: number };
  //     this.setState(prevState => ({
  //       contacts: [...prevState.contacts, contact],
  //     }));
  //     Notify.success(
  //       `${name} was successfully added to your contacts`,{
  //         position: 'center-center',
  //       }
        
  //     );
  //   }
  // };
 
  
 
  onFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onDeleteContact = (id, name) => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
    Notify.info(
      `${name} was successfully deleted from your contacts`,
      {
        position: 'center-center',
      }
    );
  };



  render() {
  const {filter} = this.state;
    return (
      <>
        <ContactForm />
        <Filter filter={filter} handleChange={this.handleChange}  />
        <ContactList contacts={this.onFilteredContacts()} onDeleteContact={this.onDeleteContact} />
      </>
    );
  }
}
