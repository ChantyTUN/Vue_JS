<script setup></script>

<template>
  <div
    class="h-[25rem] overflow-auto border rounded-xl w-[80%] md:w-[60%] lg:w-[40%] p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-800"
  >
    <h1 class="text-lg font-bold mb-2">Todo List</h1>
    <div>
      <input
        type="text"
        name=""
        id=""
        v-model="titleInput"
        class="px-5 py-1 rounded-xl bg-transparent border placeholder:text-gray-200 outline-none"
      />
      <!-- Clase button add  -->
      <!-- <button
        class="bg-gradient-to-l from-indigo-500 via-purple-500 to-prink-500 rounded-xl px-2 py-1 active:bg-blue-500 ml-2"
        @click="addTodo"
      >
        Add
      </button> -->
      <button
        class="bg-transparent hover:bg-blue-500 text-white-900 font-semibold hover:text-white rounded-xl py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-2"
        @click="addTodo"
      >
        Submit
      </button>
    </div>

    <div v-for="todo in data">
      <div
        class="border px-5 py-1 rounded mt-2 cursor-pointer hover:bg-gray-800 transition-all justify-between flex items-center"
      >
        <div v-if="todo.doned">
          <s class="text-red-500">{{ todo.title }}</s>
        </div>
        <div v-else>
          <h1>{{ todo.title }}</h1>
        </div>

        <div>
          <button
            class="bg-blue-500 px-2 py-1 rounded-xl"
            @click="() => remakedTodo(todo.title)"
          >
            Doned
          </button>
          <button
            class="ml-2 bg-red-500 px-2 py-1 rounded-xl"
            @click="deletedTodo(todo.title)"
          >
            Deleted
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const data = ref();
    const titleInput = ref("");

    const getAll = () => {
      data.value = JSON.parse(localStorage.getItem("todo"));
    };
    getAll();

    const addTodo = () => {
      if (!titleInput.value) return alert("Please input something value");
      const items = JSON.parse(localStorage.getItem("todo"));
      const existed = items?.find((item) => item.title === titleInput.value);
      if (existed) return alert("Exit Todo Because The Same Name");

      if (items) {
        localStorage.setItem(
          "todo",
          JSON.stringify([...items, { title: titleInput.value, doned: false }])
        );
      } else {
        localStorage.setItem(
          "todo",
          JSON.stringify([{ title: titleInput.value, doned: false }])
        );
      }
      titleInput.value = "";
      getAll();
    };

    // deleted
    const deletedTodo = (title) => {
      const deleted = data.value.filter((item) => item.title !== title);
      localStorage.setItem("todo", JSON.stringify(deleted));
      getAll();
    };

    // Doned
    const remakedTodo = (title) => {
      const updated = data.value.map((item) =>
        item.title == title ? { ...item, doned: true } : item
      );
      localStorage.setItem("todo", JSON.stringify(updated));
      getAll();
    };
    return {
      data,
      titleInput,
      addTodo,
      deletedTodo,
      remakedTodo,
    };
  },
};
</script>
