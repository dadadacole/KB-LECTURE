<template>
    <div>
        <slot name="icon"></slot>
        <!-- 체크박스 변경시 id값과 체크박스의 상태값을 부모로 보냄 -->
        <input type="checkbox" :value="id" :checked="checked" @change="$emit('check-changed', { id, checked: $event.target.checked })" />

        <slot name="label">Item</slot>
    </div>
</template>

<script>
export default {
    name: 'CheckBox1',
    props: ['id', 'checked'], //부모 컴포넌트로부터 받을 속성들
};
</script>

<!-- 얘네가 자식임 -->
