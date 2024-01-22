import { useCallback, useContext, useState } from "react";
import { ToDoItemCheckbox } from "components/ToDo/ToDoItem";
import { ToDoContext } from "contexts/ToDoContext";
import './ToDoItem.css';

function ToDoItem({ id, description, checked = false, isEditable = false, isRemovable = true }) {
  const [ editable, _setEditable ] = useState(isEditable);
  const [ removable, _setRemovable ] = useState(isRemovable);
  const { updateItem } = useContext(ToDoContext);

  const onCheckboxClickHandler = useCallback((itemChecked) => {
    updateItem(id, description, itemChecked);
  }, [id, description]);

  return (
    <div className='todo-item-container'>
      <ToDoItemCheckbox
        itemChecked={checked}
        onClickHandler={onCheckboxClickHandler}
      />
      <p className='todo-item-description'>
        {description}
      </p>
      <div className='todo-item-actions'>

      </div>
    </div>
  );
}

export default ToDoItem;