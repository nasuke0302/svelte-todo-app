<script>
  import { createEventDispatcher } from "svelte";
  import { _ } from "svelte-i18n";

  let dispatch = createEventDispatcher();
  let newTodo = "";

  const handleSubmit = () => {
    if (newTodo) {
      dispatch("addToDo", { todo: newTodo });
      newTodo = "";
    }
  };
</script>

<style>
  @media screen and (max-width: 620px) {
    div {
      flex-flow: column !important;
      align-items: center !important;
    }
    input,
    button {
      width: 300px !important;
    }
    input {
      margin-right: 0 !important;
    }
  }

  @media screen and (max-width: 400px) {
    input,
    button {
      width: 80vw !important;
    }
  }

  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: baseline;
    margin: 20px 0;
  }

  input {
    margin-right: 20px;
    height: 40px;
    width: auto;
    padding: 10px;
    transition: all 0.2s ease;
  }

  input:active,
  input:focus {
    border-color: #585f8f;
    outline: none;
  }

  button {
    height: 40px;
    width: 100px;
    border: none;
    color: white;
    background-color: #585f8f;
    box-shadow: 2px 2px 5px #e2e2e2;
    transition: all 0.2s ease;
  }
  button:hover {
    background-color: #6f78b4;
    cursor: pointer;
  }
  button:active {
    background-color: #43496e;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <input type="text" bind:value={newTodo} placeholder={$_('placeholders.newTodo')} />
    <button type="submit">{$_('buttons.texts.newTodo')}</button>
  </div>
</form>
