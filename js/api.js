const { createApp } = Vue

  createApp({
    data() {
      return {
        url:'https://monick96.github.io/json/investors.json',
        sponsors:[]
      }
    },
    methods: {
        fetchData(url) {
  
            fetch(url)
                .then(response => response.json())
                .then(data => { 
                    this.sponsors=data.investors //guarda en array drinks,creado por mi, lo obtenido del json
                    console.log(this.sponsors)
                })
  
        }
    },
      created(){
  
        this.fetchData(this.url) 
      }
  }).mount('#app')