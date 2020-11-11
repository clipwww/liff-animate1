import { createApp } from "vue";

// @ts-ignore
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '@/router/guards';
import { installLIFF } from '@/plugins/liff'
import '@/plugins/dayjs';

import '@/assets/css/tailwind.css'
import '@/assets/scss/index.scss';

(async () => {
  await installLIFF();

  createApp(App).use(router).use(store).mount("#app");
})();