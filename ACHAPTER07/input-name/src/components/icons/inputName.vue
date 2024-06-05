<template>
    <div style="border: solid 1x gray; padding: 5px">
        이름:<input type="text" v-model="name" />
        <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
    </div>
</template>

<script>
export default {
    name: 'InputName',
    emits: {
        nameChanged: (e) => {
            // name이 되어 있지 않고 type이 string이며, 앞뒤 공백을 제거하고 길이가 3이상일 경우 true 리턴
            return e.name && typeof e.name === 'string' && e.name.trim().length >= 3 ? true : false;
        },
    },
    data() {
        return { name: '' };
    },
};
</script>
