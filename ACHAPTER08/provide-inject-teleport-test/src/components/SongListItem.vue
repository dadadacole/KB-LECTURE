<template>
    <li>
        <i :class="song.done ? icons.checked : icons.unchecked"></i>"
        {{ song.title }}
    </li>
</template>

<script>
export default {
    name: 'SongListItem',
    // 부모에서 provide한 항목을 inject로 가져올 수 있다
    inject: ['icons'],
    props: ['song'],
};
</script>
