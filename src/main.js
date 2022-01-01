import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import store from "./store"
import PageHeader from "@/components/PageHeader"
import {localStorageRead,localStorageWrite,localStorageDeleteAll,localStorageDelete} from "@/helpers/localStorageFunction"

const app = createApp(App)
  .use(store)
  .use(router);


app.mixin({
  methods: {
    localStorageDelete: localStorageDelete,
    localStorageDeleteAll: localStorageDeleteAll,
    localStorageWrite: localStorageWrite,
    localStorageRead: localStorageRead

  },
})

app.component("page-header",PageHeader)

router.isReady().then(() => {
  app.mount('#app');
});