import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../auth/auth-operatipons';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (text, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', text);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await axios({
        method: 'patch',
        url: `https://connections-api.herokuapp.com/contacts/${id}`,
        data: {
          name: `${name}`,
          number: `${number}`,
        },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
