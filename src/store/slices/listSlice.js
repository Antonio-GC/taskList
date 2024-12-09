import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Lista de tareas pendientes
  completed: [], // Lista de tareas completadas
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // Agregar una tarea a la lista de pendientes
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload); // Eliminar solo de la lista de pendientes
    },
    removeCompletedItem: (state, action) => {
      state.completed = state.completed.filter((item) => item.id !== action.payload); // Eliminar solo de la lista de completadas
    },
    completeItem: (state, action) => {
      const itemToComplete = state.items.find((item) => item.id === action.payload);
      if (itemToComplete) {
        const alreadyCompleted = state.completed.find((item) => item.id === action.payload);
        if (!alreadyCompleted) {
          state.completed.push({ ...itemToComplete, completed: true }); // Agregar a completadas
        }
      }
    },
    uncompleteItem: (state, action) => {
      const itemToUncomplete = state.completed.find((item) => item.id === action.payload);
      if (itemToUncomplete) {
        state.completed = state.completed.filter((item) => item.id !== action.payload); // Quitar de completadas
      }
    },
    toggleComplete: (state, action) => {
      const itemInCompleted = state.completed.find((item) => item.id === action.payload);
      if (itemInCompleted) {
        state.completed = state.completed.filter((item) => item.id !== action.payload); // Quitar de completadas
      } else {
        const itemInPending = state.items.find((item) => item.id === action.payload);
        if (itemInPending) {
          state.completed.push({ ...itemInPending, completed: true }); // Agregar a completadas
        }
      }
    },
    clearList: (state) => {
      state.items = []; // Vaciar pendientes
      state.completed = []; // Vaciar completadas
    },
  },
});

// Exportar las acciones
export const { addItem, removeItem, removeCompletedItem, completeItem, uncompleteItem, toggleComplete, clearList } = listSlice.actions;

// Exportar el reducer
export default listSlice.reducer;
