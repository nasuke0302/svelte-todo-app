<script>
  import { createEventDispatcher } from "svelte";

  export let todos;

  const dispatch = createEventDispatcher();
  const handleClick = todo => {
    dispatch("removeToDo", { todo });
  };
</script>

<style>
  @media screen and (max-width: 620px) {
    .todo-list {
      width: 80vw !important;
    }
  }

  .todo-list {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    width: 400px;
    margin: auto;
  }

  .todo-item {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    animation: appear-above 0.2s ease;
    animation-fill-mode: forwards;
  }

  p {
    font-size: 18px;
    color: #585f8f;
  }
  button {
    border: none;
    background-color: transparent;
    color: #585f8f;
    border-radius: 20px;
    height: 28px;
    width: 28px;
    padding: 5px;
    margin-bottom: 0;
    transition: all 0.2s ease;
  }
  button:hover {
    background-color: #efefef;
    cursor: pointer;
  }
  button:active {
    background-color: #a0a0a0;
  }

  h3 {
    flex: 1;
    align-self: center;
    color: #bbbbbb;
    font-size: 30px;
    font-weight: bold;
    margin: 0;
    animation: appear 0.3s ease;
    animation-fill-mode: forwards;
  }

  @keyframes appear-below {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes appear-above {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

<div class="todo-list">
  {#each todos as todo, i}
    <div class="todo-item">
      <p class="todo-text">{todo}</p>
      <button on:click={() => handleClick(todo)}>&checkmark;</button>
    </div>
  {:else}
    <h3>Nothing To Do :)</h3>
  {/each}
</div>
