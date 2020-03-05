<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoItems" v-bind:key="item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: item.completed}" v-on:click="toggleComplete(item, index)"></i>
        <span v-bind:class="{textCompleted: item.completed}">{{item.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo(item, index)">
          <i class="fas fa-trash-alt" ></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    // vue life cycle : created, mounted, updated, destroyed
    console.log("created");
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  data() {
    return {
      todoItems: []
    };
  },
  methods: {
    removeTodo: function(item, index) {
      console.log(item, index);
      localStorage.removeItem(item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(item, index) {
      item.completed = !item.completed;
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, JSON.stringify(item))
      console.log(index);
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* transition css */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>