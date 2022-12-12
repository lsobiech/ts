import React, { useRef } from "react";


type NewTodoProps = {
  onAddTodo: (todoText: string) => void
}


const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const toDoSubmitHandler = (ev: React.FormEvent) => {
    ev.preventDefault();
    const enteredText = textInputRef.current!.value;

    console.log('enteredText', enteredText)
    props.onAddTodo(enteredText)
  };

  return (
    <form onSubmit={toDoSubmitHandler}>
      <div>
        <label htmlFor="todo-text"></label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
