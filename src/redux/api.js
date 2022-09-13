import axios from "axios";

const instance = axios.create({
  baseURL: 'https://631e5ed022cefb1edc342ae9.mockapi.io/api/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async (data) => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeContact = async (id) => {
  const { data: result } = await instance.delete(`/${id}`);
  return result;
};

