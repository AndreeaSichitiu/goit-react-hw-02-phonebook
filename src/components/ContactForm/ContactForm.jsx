import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export default function ContactForm() {

    return (
    <div className={style.phonebookWrapper}>
      <h1>Phonebook</h1>
      <form className={style.contactForm} >
        <label className={style.formLabel}>Name</label>
        <input
        className={style.phonebookInput}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern= "^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
        <label className={style.formLabel}>Phone Number</label>
        <input
         className={style.phonebookInput}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
        <button className={style.formButton} type="submit">Add contact</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,

};
