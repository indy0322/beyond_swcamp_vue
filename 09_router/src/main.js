import { createApp } from 'vue'
import App from './App.vue'
import router from './router/01_router.js';

/* npm install vue-router@next로 dependency 추가 */
createApp(App).use(router).mount('#app')
