const { createApp } = Vue

  createApp({
    data() {
      return {
        list : 'api.php',
        todo : [],
      }
    },
    methods: {
        chiamata(){
            axios.get( this.list ).then((risp) => {
                const risposta = risp.data
                this.todo = risposta
                console.log(this.todo)
              }); 
        }
    }
  }).mount('#app')