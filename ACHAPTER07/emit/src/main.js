import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';
//전역 컴포넌트 등록 방법
// import CheckboxItem from './components/CheckboxItem.vue';

const emitter = mitt();
emitter.on('*', type);

import mitt from 'mitt';

const emitter = mitt();
emitter.on('*');
createApp(App).mount('#app');
