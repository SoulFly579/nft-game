import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import store from "./store"
import PageHeader from "@/components/PageHeader"

const app = createApp(App)
  .use(store)
  .use(router);

app.component("page-header",PageHeader)

router.isReady().then(() => {
  app.mount('#app');
});