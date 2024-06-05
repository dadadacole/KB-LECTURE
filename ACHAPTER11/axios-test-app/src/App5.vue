<template>
    <div>
        <h2>콘솔을 확인합니다</h2>
    </div>
</template>

<script setup>
import axios from 'axios';

const requestAPI = async () => {
    // const url = 'http://localhost:3000/todos/1';
    //해당 url에 있는 데이터를 가져와서 콘솔에 출력
    const url = '/api/todos';
    try {
        const response = await axios.get(url, { timeout: 900 });
        console.log('#응답객체:', response);
    } catch (e) {
        console.log('## 다음 오류가 발생했습니다');
        if (e instanceof Error) console.log(e.message);
        else console.log(e);
    }
};

requestAPI();
</script>
