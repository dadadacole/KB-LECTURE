<template>
    <div>
        <Child1 />
        <Child2 />
        <Child3 />
    </div>
</template>

<script>
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';
import Child3 from './components/Child3.vue';

export default {
    name: 'Appszsdfzdsfzssss',
    components: { Child1, Child2, Child3 },
};
</script>

<!-- 
<script>
import NoSlotTest from './components/NoSlotTest.vue';
import SlotTest from './components/SlotTest.vue';

export default {
    name: 'App',
    components: { NoSlotTest, SlotTest },
};
</script>
<style></style> -->
