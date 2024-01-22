import { useState } from "react";
import './ToDoItemCheckbox.css';

function ToDoItemCheckbox({ itemChecked, onClickHandler }) {
  const [ checked ] = useState(itemChecked);

  return (
    <button onClick={() => onClickHandler(!checked)}>
      {
        checked
        ? (<img src='/src/assets/images/icon-check.svg'/>)
        : (<></>)
      }
    </button>
  )
}

export default ToDoItemCheckbox;