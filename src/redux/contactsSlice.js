import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: (state, {payload}) => {
      const duplicateName = state.contacts.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase());
      if (duplicateName) {
        alert(`${payload.name} is already in your contacts`);
        return;
      };
      return { ...state, contacts: [...state.contacts, payload] };
    },
    removeContact: (state, {payload}) => {
      const newContacts = state.contacts.filter(({ id }) => id !== payload);
      return { ...state, contacts: newContacts };
    },
    filterContacts: (state, {payload}) => {
      return { ...state, filter: payload };
    },
    
  },
});

export const { addContact, removeContact, filterContacts } = contactsSlice.actions;
export default contactsSlice;