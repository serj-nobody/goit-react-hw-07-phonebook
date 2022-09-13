import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (_, {payload}) => payload,
  },
});

export default filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;