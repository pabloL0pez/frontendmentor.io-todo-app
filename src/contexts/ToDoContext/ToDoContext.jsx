import { createContext, useState } from "react";

export const ToDoContext = createContext({
  toDoItems: [],
});

function ToDoContextProvider({ children }) {
  const [ state, setState ] = useState({
    toDoItems: [],
    addToDoItem: addToDoItem,
    removeToDoItem: removeToDoItem,
    checkToDoItem: checkToDoItem,
    uncheckToDoItem: uncheckToDoItem,
    updateToDoItems: updateToDoItems,
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

  function checkToDoItem(itemId) {
    _updateItem(itemId, true);
  }

  function uncheckToDoItem(itemId) {
    _updateItem(itemId, false);
  }

  function updateToDoItems(items) {
    setState({
      ...state,
      toDoItems: items,
    });
  }

  // --- Private functions ---

  function _updateItem(itemId, checked) {
    setState({
      ...state,
      toDoItems: state.toDoItems.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            checked,
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