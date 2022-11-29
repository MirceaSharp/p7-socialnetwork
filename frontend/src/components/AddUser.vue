<template>
    <div>
        <div class="field">
            <label class="label">
    Username
            </label>
            <div class="control">
                <input
                class="input"
                type="text"
                placeholder="Product Name"
                v-model="Username"
                />
            </div>
        </div>

        <div class=field>
            <label class="label">
Password
            </label>
            <div class="control">
                <input
                class="input"
                type="password"
                placeholder="Price"
                v-model="Password"
                />
            </div>
        </div>
        <div class="control">
<button class="button is-success" @click="saveUser">SignUp</button>
        </div>
    </div>
    
    </template>
    
    <script>
    import axios from "axios";
    var bcrypt = require("bcryptjs");


    export default {
        
        data(){
        return{
           Username:"",
            Password:"",
        };
    },
    
    methods: {           
        
        async saveUser(){
            const hash = await bcrypt.hash(this.Password,10)
            
            try{
            await axios.post("http://localhost:5000/users",
             {               
          username: this.Username,
           password: hash,
        });
      
(this.Username=""), (this.Password="");
this.$router.push("/posts");
    }catch(err){
        console.log(err);
    }
    },
    
},
    
    };
   
 
    </script>
   