<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addItem"></todo-input> <!-- 하위 컴포넌트에서 올린 이벤트의 데이터들은 params로 입력하지 않아도 알아서 들어간다 -->
    <todo-list v-bind:appTodoItems="todoItems" v-on:removeTodoItem="removeItem" v-on:toggleTodoItem="toggleItem"></todo-list>
    <todo-footer v-on:clearTodoItems="clearItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  created() {
    // vue life cycle : created, mounted, updated, destroyed
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  data() {
    return {
      todoItems: []
    };
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  methods: {
    addItem: function(item) {
      var obj = { completed: false, item: item };
      localStorage.setItem(item, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeItem: function(item, index) {
      localStorage.removeItem(item.item);
      this.todoItems.splice(index, 1);
    },
    toggleItem: function(item, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, JSON.stringify(item))
    },
    clearItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  }
};
</script> 

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
