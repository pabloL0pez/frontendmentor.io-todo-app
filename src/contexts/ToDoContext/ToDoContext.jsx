import { createContext, useState } from "react";

export const ToDoContext = createContext({
  toDoItems: [],
});

function ToDoContextProvider({ children }) {
  const [ state, setState ] = useState({
    toDoItems: [],
    addToDoItem: addToDoItem,
    checkToDoItem: checkToDoItem,
    uncheckToDoItem: uncheckToDoItem,
  });

  function addToDoItem(itemDescription) {
    setState({
      ...state,
      toDoItems: [
        ...state.toDoItems,
        {
          id: state.toDoItems.reduce((item, maxId) => item.id > maxId ? item.id : maxId, 0),
          description: itemDescription,
          checked: false,
        },
      ],
    });
  }

  function checkToDoItem(itemId) {
    setState({
      ...state,
      toDoItems: state.toDoItems.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            checked: true,
          }
        }

        return item;
      }),
    });
  }

  function uncheckToDoItem(itemId) {
    setState({
      ...state,
      toDoItems: state.toDoItems.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            checked: false,
          }
        }

        return item;
      }),
    });
  }

  return (
    <ToDoContext.Provider value={state}>
      { children }
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;