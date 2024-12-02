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
      state.items = state.items.filter((item) => item.id !== action.payload); // Eliminar de pendientes
      state.completed = state.completed.filter((item) => item.id !== action.payload); // Eliminar de completadas
    },
    completeItem: (state, action) => {
      const itemToComplete = state.items.find((item) => item.id === action.payload);
      if (itemToComplete) {
        const alreadyCompleted = state.completed.find((item) => item.id === action.payload);
        if (!alreadyCompleted) {
          // Solo agrega a completadas si no está ya allí
          state.completed.push({ ...itemToComplete, completed: true });
        }
      }
    },
    uncompleteItem: (state, action) => {
      // Lógica para desmarcar una tarea completada
      state.completed = state.completed.filter((item) => item.id !== action.payload);
    },
    clearList: (state) => {
      state.items = []; // Vaciar la lista de pendientes
      state.completed = []; // Vaciar la lista de completadas
    },
  },
});

// Exportar las acciones
export const { addItem, removeItem, completeItem, uncompleteItem, clearList } = listSlice.actions;

// Exportar el reducer
export default listSlice.reducer;
