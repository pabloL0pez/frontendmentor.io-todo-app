import { createContext, useState } from "react";

export const ToDoContext = createContext({
  toDoItems: [],
});

function ToDoContextProvider({ children }) {
  const [ state, setState ] = useState({
    toDoItems: [],
    addToDoItem: addToDoItem,
    removeToDoItem: removeToDoItem,
    updateItem: updateItem,
    updateToDoItems: updateToDoItems,
  });

  function addToDoItem(description = '', checked = false) {
    setState({
      ...state,
      toDoItems: [
        ...state.toDoItems,
        {
          id: state.toDoItems.reduce((item, maxId) => item.id > maxId ? item.id : maxId, 0),
          description,
          checked,
        },
      ],
    });
  }

  function removeToDoItem(itemId) {
    setState({
      ...state,
      toDoItems: state.toDoItems.reduce((item, items) => {
        if (item.id !== itemId) {
          items.push(item);
        }

        return items;
      }, []),
    });
  }

  function updateItem(itemId, description, checked) {
    setState({
      ...state,
      toDoItems: state.toDoItems.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            description,
            checked,
          }
        }

        return item;
      }),
    });
  }

  function updateToDoItems(items = []) {
    setState({
      ...state,
      toDoItems: items,
    });
  }

  return (
    <ToDoContext.Provider value={state}>
      { children }
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;