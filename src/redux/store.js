import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./Contacts/contacts-slice";
import filterReducer from "./Filter/filter-slice"

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});