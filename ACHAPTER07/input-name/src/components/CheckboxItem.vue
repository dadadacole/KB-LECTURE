<template>
    <!-- idol을 객체로 받아왔으므로 idol 안쪽의 속성에 .으로 접근 -->
    <!-- :checked는 실제 체크 박스 안에 있는 html 속성(체크 여부) -->
    <li><input type="checkbox" :checked="checked" />{{ id }} - {{ name }}</li>
</template>

<script>
export default {
    name: 'CheckboxItem',
    //받아올 속성이 많은 경우 객체를 통째로 넘겨준다
    props: {
        id: [Number, String], //Number나 String 타입이다
        name: String,
        checked: {
            type: Boolean,
            required: false, //필수 속성이 아니다 = 옵션이다
            default: false, // 생략하면 기본값이 false가 된다
        },
    }, //속성명을 배열로 정의
};
</script>
