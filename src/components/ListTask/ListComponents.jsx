import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, removeCompletedItem, uncompleteItem, completeItem } from '../../store/slices/listSlice';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Tabs from '../../atoms/Tab';
import "./style.css";
import { useTheme } from '../../context/ThemeContext';
import CheckIcon from '../../icons/Check';

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
                  <span className="checkmark">
                    {completed.some((completedItem) => completedItem.id === item.id) && <CheckIcon />}
                  </span>
                </label>
                <span className="todo-text">{item.text}</span>
                <Button onClick={() => dispatch(removeItem(item.id))}>Eliminar</Button>
              </li>
            ))}
          </ul>
        </Tabs.Tab>
        <Tabs.Tab label="Terminadas">
          <ul className={`todo-list ${theme}`}>
            {completed.map((item) => (
              <li key={item.id} className="todo-item completed">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked
                    onChange={() => dispatch(uncompleteItem(item.id))}
                  />
                  <span className="checkmark">
                    <CheckIcon />
                  </span>
                </label>
                <span className="todo-text">{item.text}</span>
                <Button onClick={() => dispatch(removeCompletedItem(item.id))}>Eliminar</Button>
              </li>
            ))}
          </ul>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default ListComponent;
