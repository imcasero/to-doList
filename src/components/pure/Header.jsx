import { useState } from "react";
import PropTypes from "prop-types";
import style from "../../style/header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import todoLogo from "../../assets/todoLogo.svg";

function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if(title){
      onAddTask(title);
      setTitle("");
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={style.header}>
      <img src={todoLogo} alt="Todo Logo" />

      <form onSubmit={handleSubmit} className={style.newTaskForm}>
        <input
          placeholder="add a new task"
          type="text"
          value={title}
          onChange={onChangeTitle}
        ></input>
        <button type="submit">
          Add
          <AiOutlinePlusCircle size={24} />
        </button>
      </form>
    </header>
  );
}

Header.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default Header;
