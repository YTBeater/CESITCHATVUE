<template>
   <div>  
       <form @submit.prevent="inscription">   
            <input v-model="email" type="text" placeholder="Email">
            <input v-model="password" type="password" placeholder="Mot de passe">
            <button type="submit">Valider</button>
        </form> 
    </div>
</template>

<script>
    import firebase from 'firebase'
    
    export default {
    name: "Inscription",
    data(){
        return {
            email: null,
            password: null
        }
    },
    methods: {
        async inscription(){
            try {
                await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            }
            catch(error){
                console.log(error)                
            }            
        }
    }
}

</script>