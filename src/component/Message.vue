<template>
  <div>
      {{ pseudonyme }}
      {{ message }}
  </div>
</template>

<script lang="ts">
    export default {
        name: 'Message',
        props: {
            pseudonyme: {
                default: " ",
                required: true,
                type: String 
        },
            message: {
                default: " ",
                required: true,
                type: String 
            }
        }
    }    
</script>