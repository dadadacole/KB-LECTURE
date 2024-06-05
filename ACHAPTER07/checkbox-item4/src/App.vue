<template>
    <div>
        <h2>App 컴포넌트</h2>
        <hr />
        <ul>
            <!-- idol은 자식한테 props로 전달해주는 속성 -->

            <CheckboxItem v-for="idol in idols" :key="idol.id" :id="idol.id" :name="idol.name" :checked="idol.checked" />
        </ul>
    </div>
</template>

<script>
//지역 컴포넌트 등록 방법(사용할 파일에서만 명시)
import CheckboxItem from './components/CheckboxItem.vue';
export default {
    name: 'App',
    components: { CheckboxItem },
    data() {
        return {
            //props 부분에서 checked의 기본값을 false로 정해줬기 때문에 생략 가능
            idols: [
                { id: 1, name: 'BTS', checked: true },
                { id: 2, name: 'Black pink' },
                { id: 3, name: 'BTS' },
                { id: 4, name: 'BTS' },
            ],
        };
    },
};
</script>
