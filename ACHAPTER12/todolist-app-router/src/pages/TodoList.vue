<template>
    <div class="row">
        <div class="col p-3">
            <!-- 링크 클릭시 할일 추가 화면으로 이동 -->
            <router-link class="btn btn-primary" to="/todos/add"> 할일추가 </router-link>
            <!-- <button class="btn btn-primary ms-1" @click="fetchTodoList">새로고침</button> -->
        </div>
    </div>
    <div class="row">
        <div class="col p-3">
            <ul class="list-group">
                <TodoItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem" />
            </ul>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import TodoItem from '@TodoItem.vue';

const todoList = inject('todoList');
const { fetchTodoList } = inject('actions');
</script>
