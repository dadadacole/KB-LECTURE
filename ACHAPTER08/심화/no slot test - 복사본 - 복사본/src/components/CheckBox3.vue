<template>
    <div>
        <slot name="icon"> </slot>
        <input type="checkbox" :value="id" :checked="checked" @change="$emit('check-changed', { id, checked: $event.target.checked })" />

        <slot name="label">Item</slot>
    </div>
</template>

<script>
export default {
    name: 'CheckBox3',
    props: ['id', 'checked'], //부모 컴포넌트로부터 받을 속성들
};
</script>

<!-- 얘네가 자식임 -->
