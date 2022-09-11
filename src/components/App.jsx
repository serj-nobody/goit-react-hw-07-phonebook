import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

import { PhonebookApp, PhonebookTitle, ContactsTitle } from "./App.styled";



export function App() {

  return (

    <PhonebookApp>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </PhonebookApp>
  );
};