import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/Contacts/contacts-operations";

import { ContactItem } from "components/ContactItem/ContactItem";

import { ContactListStyled } from "./ContactList.styled";



export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterResults = () => {
  const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const filterResults = getFilterResults();

  return (
    <ContactListStyled>
      {filterResults.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ContactListStyled>
  );
}