import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';

export const useTodoList1Store = defineStore('todoList1', {
    state: () => ({
        todoList: [
            { id: 1, todo: 'ES6학습', done: false },
            { id: 2, todo: 'React학습', done: false },
            { id: 3, todo: 'ContextAPI 학습', done: true },
            { id: 4, todo: 'ES6학습', done: false },
        ],
    }),
    getters: {
        doneCount: (state) => {
            return state.todoList.filter((todoItem) => todoItem.done);
        },
    },
});

// state pinia만 yes임
