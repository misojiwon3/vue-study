import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // vue의 plugin을 사용하는 api. global.

const storage = {
  fetch() {
    const arr = [];
    // vue life cycle : created, mounted, updated, destroyed
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }

    return arr;
  },
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addItem(state, item) {
      const obj = { completed: false, item: item };
      localStorage.setItem(item, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeItem(state, obj) {
      localStorage.removeItem(obj.item.item);
      state.todoItems.splice(obj.index, 1);
    },
    toggleItem(state, obj) {
      state.todoItems[obj.index].completed = !state.todoItems[obj.index].completed
      localStorage.removeItem(obj.item.item);
      localStorage.setItem(obj.item.item, JSON.stringify(obj.item))
    },
    clearItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});