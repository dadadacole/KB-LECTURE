<template>
    <div>
        <h3>당신이 경험한 프론트 엔드 기술은?</h3>
        <CheckBox1 v-for="item in items" :key="item.id" :id="item.id" :label="item.label" :checked="item.checked" @check-changed="CheckBoxChanged">
            <!-- 기존 코드에서 props에서 checked와 label을 -->

            <span v-if="checked === true" style="color: blue; text-decoration: underline">
                <i>{{ item.label }}</i>
            </span>
            <!-- 체크 해제됐을 경우 렌더링되는 span -->
            <span v-else style="color: gray">{{ item.label }}</span>
        </CheckBox1>
    </div>
</template>

<script>
import CheckBox1 from './CheckBox1.vue';

export default {
    name: 'NoSlotTest',
    components: { CheckBox1 },
    data() {
        return {
            items: [
                { id: 'V', checked: true, label: 'Vue' },
                { id: 'A', checked: false, label: 'Angular' },
                { id: 'R', checked: false, label: 'React' },
                { id: 'S', checked: false, label: 'Svelte' },
            ],
        };
    },
    methods: {
        CheckBoxChanged(e) {
            let item = this.items.find((item) => item.id === e.id);
            item.checked = e.checked;
        },
    },
};
</script>
