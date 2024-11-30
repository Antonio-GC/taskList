import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, addItem, clearList } from '../store/slices/listSlice';


const ListComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const items = useSelector((state) => state.list.items); // Seleccionar la lista del estado
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      dispatch(addItem({ id: Date.now(), text: inputValue })); // Agregar un nuevo ítem con un id único
      setInputValue(''); // Limpiar el input
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id)); // Remover un ítem por id
  };

  const handleClearList = () => {
    dispatch(clearList()); // Vaciar la lista
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe algo"
      />
      <button onClick={handleAddItem}>Agregar</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {items.length > 0 && <button onClick={handleClearList}>Limpiar Lista</button>}
    </div>
  );
};

export default ListComponent;
