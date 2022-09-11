import { useSelector } from "react-redux";

import { ContactItem } from "components/ContactItem/ContactItem";

import { ContactListStyled } from "./ContactList.styled";



export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

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