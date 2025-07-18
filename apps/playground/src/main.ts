import { createApp } from "vue";
import App from "./app/App.vue";
import { dummyFn } from "@vite-reprod/utils/lib/util";

dummyFn();
const app = createApp(App);
app.mount("#root");
