<template>
    <div id="app" class="container">
        <inputTodo />
        <TodoList />
    </div>
</template>

<script>
import TodoList from 'vue-project\src\components\TodoList.vue';
import InputTodo from 'vue-project\src\components\InputTodo.vue';

export default {
    name: 'App',

    //IMPORT와 짝궁 component로 등록해줘야함
    components: { InputTodo, TodoList },
};
</script>
