import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store/store'
import { createPinia } from 'pinia'

// import './assets/main.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import 'mdb-vue-ui-kit/css/mdb.min.css'

import VueApexCharts from "vue3-apexcharts";

import LoadScript from "vue-plugin-load-script";


// import 'xe-utils'
// import VXETable from 'vxe-table'
// import 'vxe-table/lib/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(store)
app.use(VueApexCharts);
// app.use(VXETable);
app.use(LoadScript);


app.mount('#app')






