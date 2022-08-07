const app = Vue.createApp({
  data() {
    return {
      myArray: [
        ],
      name: "",
      email: "",
      alarm: false,
   
    
    };
  },
  methods: {
    pushData() {
      if(this.name===""){
      this.alarm = true;
      }
else{this.myArray.push({name:this.name, email: this.email});}
      
      
    },

  },


});



app.mount("#container");
