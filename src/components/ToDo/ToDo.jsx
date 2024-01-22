import { ToDoItem } from "components/ToDo/ToDoItem";

function ToDo() {
  return (
    <>
      <ToDoItem
        id={1}
        description='Something to do'
        checked={true}
      />
    </>
  );
}

export default ToDo;