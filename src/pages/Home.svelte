<script>
  import { _ } from "svelte-i18n";

  import Navbar from "../components/Navbar.svelte";
  import ToDoList from "../components/ToDoList.svelte";
  import ToDoAdd from "../components/ToDoAdd.svelte";

  $: todos = JSON.parse(localStorage.getItem("todos")) || [];

  const updateToDosStore = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addToDo = ({ detail }) => {
    let newTodo = todos.find(todo => todo === detail.todo);
    if (newTodo) {
      alert($_("pages.home.alreadyExists"));
      return;
    }
    todos = [...todos, detail.todo];

    updateToDosStore();
  };

  const removeToDo = ({ detail }) => {
    let remainingTodos = todos.filter(todo => todo !== detail.todo);
    todos = [...remainingTodos];
    updateToDosStore();
  };
</script>

<Navbar />
<ToDoAdd on:addToDo={addToDo} />
<ToDoList {todos} on:removeToDo={removeToDo} />
