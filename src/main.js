import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

const AquaEcom = createApp(App);

AquaEcom.use(Quasar, quasarUserOptions).use(store).use(router).mount("#app");
