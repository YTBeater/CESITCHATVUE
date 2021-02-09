import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});

const firebaseConfig = {
  apiKey: "AIzaSyBxBOY52wExAe7nldQpjBgmYn881sOEsnQ",
  authDomain: "tchat-cesi-ypi-c9160.firebaseapp.com",
  projectId: "tchat-cesi-ypi-c9160",
  storageBucket: "tchat-cesi-ypi-c9160.appspot.com",
  messagingSenderId: "509812095288",
  appId: "1:509812095288:web:c45c10bf423b1f46a5e9cd"
};

import firebase from 'firebase'
firebase.initializeApp(firebaseConfig)