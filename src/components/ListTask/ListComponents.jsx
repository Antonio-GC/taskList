import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, addItem, clearList, completeItem } from '../../store/slices/listSlice';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Tabs from '../../atoms/Tab';
import "./style.css"
import { useTheme } from '../../context/ThemeContext';


const ListComponent = () => {
  const [taskText, setTaskText] = useState('');
  const { items, completed } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addItem({ id: Date.now(), text: taskText, completed: false }));
      setTaskText('');
    }
  };

  const handleRemoveTask = (id) => {
    dispatch(removeItem(id));
  };

  const handleCompleteTask = (id) => {
    dispatch(completeItem(id));
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <Input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Escribe algo"
      />
      <Button onClick={handleAddTask}>Agregar</Button>
      <Tabs>
      <Tabs.Tab label="Por hacer">
      <ul className={`todo-list ${theme}`}>
      {items.map((item) => (
    <li key={item.id} className={`todo-item ${item.completed ? 'completed' : ''}`}>
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={completed.some((completedItem) => completedItem.id === item.id)}
          onChange={() =>
            completed.some((completedItem) => completedItem.id === item.id)
              ? dispatch(uncompleteItem(item.id))
              : dispatch(completeItem(item.id))
          }
        />
        <span className="checkmark"></span>
      </label>
      <span className="todo-text">{item.text}</span>
      <Button onClick={() => dispatch(removeItem(item.id))}>Eliminar</Button>
    </li>
  ))}
    </ul>
        </Tabs.Tab>
        <Tabs.Tab label="Terminadas">
        <ul>
        {completed.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => dispatch(uncompleteItem(item.id))}>Desmarcar</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Eliminar</button>
          </li>
        ))}
          </ul>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default ListComponent;
