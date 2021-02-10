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
  apiKey: "AIzaSyD8V0mNBUplEeQtydskgnmz4KKYyXO-11w",
  authDomain: "snap-ril20-brest.firebaseapp.com",
  databaseURL: "https://snap-ril20-brest-default-rtdb.firebaseio.com/",
  projectId: "snap-ril20-brest",
  storageBucket: "snap-ril20-brest.appspot.com",
  messagingSenderId: "173190378149",
  appId: "1:173190378149:web:0d7b01003cd463bae6134c"
};

import firebase from 'firebase'
firebase.initializeApp(firebaseConfig)