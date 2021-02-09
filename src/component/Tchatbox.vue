<template>
    <div>
        <input class="boiteMessage" v-model="message" v-on:keydown.enter="sendMessage"  type="text" placeholder="Ecrivez-votre message ici.">            
    </div>
    <div>
        <ul v-if="tableauMessages.length">
          <li v-for="message in tableauMessages" :key="message">
      
            <Message pseudonyme="Michel" :message="message"/>
          </li>
        </ul>
    </div>

</template>

<script>
import firebase from 'firebase'
import Message from './Message.vue'

export default {
    name: "Tchatbox",
    components:{
        Message
    },
    data(){
        return {
            message: null,
            tableauMessages:[]
        }        
    },
    methods: {
        async sendMessage(){
            await firebase.database().ref("message").push(this.message)  
        }
    },
    mounted(){
        firebase.database().ref("message").on("child_added",(snap)=>{
            this.tableauMessages.push(snap.val())           
        })     
        console.log(this.tableauMessages)
    }
}

</script>

<style scoped>
    div{
        grid-template-rows: 25% 25% 25% 25%;
        grid-template-columns: 25% 25% 25% 25%;
    }
    .boiteMessage{
        grid-row: 1/1;
        grid-column: 2/3;
    }
</style>
