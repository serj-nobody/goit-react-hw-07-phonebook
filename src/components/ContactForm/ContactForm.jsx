import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "redux/contactsSlice";

import { ContactFormStyled, InputWrapper, InputLabel, Input, Button } from "./ContactForm.styled";



export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputID = nanoid();
  const numberInputID = nanoid();

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const { name, value } = event.currentTarget;
    
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    };
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    dispatch(addContact(contact));
    reset();
  };

  return (
    <ContactFormStyled onSubmit={onSubmit}>
      <InputWrapper>
        <InputLabel htmlFor={nameInputID}>Name:</InputLabel>
        <Input
          id={nameInputID}
          type="text"
          name="name"
          value={name}
          onChange={onInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel htmlFor={numberInputID}>Number:</InputLabel>
        <Input
          id={numberInputID}
          type="tel"
          name="number"
          value={number}
          onChange={onInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputWrapper>
      
      <Button type="submit">Add contact</Button>
    </ContactFormStyled>
  );
}