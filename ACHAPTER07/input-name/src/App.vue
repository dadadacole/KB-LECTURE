<template>
    <div>
        <InputName @nameChanged="nameChangedHandler" />
        <br />
        <h3>App 데이터:{{ parentName }}</h3>
    </div>
</template>

<script>
//지역 컴포넌트 등록 방법(사용할 파일에서만 명시)
import InputName from './components/icons/inputName.vue';
export default {
    name: 'App',
    components: { InputName },
    data() {
        return {
            parentName: '',
        };
    },
    methods: {
        nameChangedHandler(e) {
            // 객체 안에 있는 name을 접근해서 data에 있는 parentName에 넣어줌
            this.parentName = e.name;
        },
    },
};
</script>
