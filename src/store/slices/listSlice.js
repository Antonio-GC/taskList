import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Lista inicial vacía
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // Agregar un elemento a la lista
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload); // Remover un elemento por id
    },
    clearList: (state) => {
      state.items = []; // Vaciar la lista
    },
  },
});

// Exportar las acciones
export const { addItem, removeItem, clearList } = listSlice.actions;

// Exportar el reducer
export default listSlice.reducer;
