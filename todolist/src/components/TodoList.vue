<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoItems" v-bind:key="item" class="shadow">
        {{item}}
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
          this.todoItems.push(localStorage.key(i));
          console.log(localStorage.key(i));
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