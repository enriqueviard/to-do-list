import {createSlice} from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    items: [
      {
        key: 1,
        name: 'Create repository',
        date: new Date(2020, 9, 25, 12, 0, 0),
        done: true,
      },
      {
        key: 2,
        name: 'Create RN App with React Native CLI',
        date: new Date(2020, 9, 27, 12, 0, 0),
        done: true,
      },
      {
        key: 3,
        name: 'Deploy App',
        date: new Date(2020, 9, 28, 12, 0, 0),
        done: false,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    edit: (state, action) => {
      action.payload.done = !action.payload.done;
      state.items = [...state.items, action.payload];
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.key !== action.payload);
    },
  },
});

export const {add, remove} = toDoSlice.actions;

export default toDoSlice.reducer;
