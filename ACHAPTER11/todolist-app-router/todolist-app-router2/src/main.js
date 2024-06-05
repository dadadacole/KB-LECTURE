import './main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);

app.use(router);

app.mount('#app');

// body{margin:0; padding:0; font-family:sans-serif;}
// .title{text-align:center; font-weight:bold; font-size:20pt}
// .todo-done{text-decoration:line-through;}
// .container{padding:10px 10px 10px 10px;}
// .panel-borderless{border:0; box-shadow:none;}
// .pointer{cursor:pointer}
