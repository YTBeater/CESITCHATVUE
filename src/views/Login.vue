<template>
   <div>  
       <form @submit.prevent="login">   
            <input v-model="email" type="text" placeholder="Email">
            <input v-model="password" type="password" placeholder="Mot de passe">
            <button type="submit">Valider</button>     
        </form>
       <Inscription/> 
    </div>
</template>

<script>
    import firebase from 'firebase'
    import Inscription from '../component/Inscription.vue'

    export default {
    name: "Login",
    components:{
        Inscription
    },
    data(){
        return {
            email: null,
            password: null
        }
    },
    methods: {
        async login(){
            try {
                await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                this.$router.push("/accueil")
            }
            catch(error){
                console.log(error) 
            }            
        }   
    }
}
</script>