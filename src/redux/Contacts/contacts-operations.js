import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api";



export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const duplicateName = ({ name }, contacts) => {
  const normalizedName = name.toLoweCase();

  const result = contacts.find(item => {
    return normalizedName === item.name.toLoweCase();
  });

  return Boolean(result);
};

export const addContact = createAsyncThunk(
  'contact/add',
  async (data, thunkAPI) => {
    try {
      console.log('WORKING!');
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (duplicateName(data, contacts.items)) {
        alert(`${data.name} is already in your contacts`);
        return false;
      }
    }  
  } 
);

export const removeContact = createAsyncThunk(
  'contact/remove',
  async (id, thunkAPI) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
