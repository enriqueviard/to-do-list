import {createSlice} from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    items: [
      {
        key: 1,
        name: 'Create repository',
        done: true,
      },
      {
        key: 2,
        name: 'Create RN App with React Native CLI',
        done: true,
      },
      {
        key: 3,
        name: 'Deploy App',
        done: false,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.items = [action.payload, ...state.items];
    },
    toggle: (state, action) => {
      const item = state.items.find((i) => i.key === action.payload);
      item.done = !item.done;
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.key !== action.payload);
    },
    edit: (state, action) => {
      const item = state.items.find((i) => i.key === action.payload.key);
      item.name = action.payload.name;
    },
  },
});

export const {add, remove, toggle, edit} = toDoSlice.actions;

export default toDoSlice.reducer;
