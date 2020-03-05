<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(item, index) in appTodoItems" v-bind:key="item.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: item.completed}" v-on:click="toggleComplete(item, index)"></i>
        <span v-bind:class="{textCompleted: item.completed}">{{item.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo(item, index)">
          <i class="fas fa-trash-alt" ></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['appTodoItems'],
  methods: {
    removeTodo: function(item, index) {
      this.$emit('removeTodoItem', item, index);
    },
    toggleComplete: function(item, index) {
      this.$emit('toggleTodoItem', item, index);
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
  transition: all .5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>