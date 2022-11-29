<template>
    <div>
        <router-link :to="{name:'Create'}" class="button is-succes mt-5">Sign Up</router-link>
    
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
<button class="button is-success" @click="loginUser">Login</button>
        </div>
    </div>
    
</div>

<table class="table is-striped is-bordered mt-2 is-fullwidth">
        <thread>
          
        </thread>
        <tbody>
            <tr v-for="item in items" :key="item.idUsers">
                <td>
                   {{item.Username}}
                </td>
                <td style="word-break: break-all">
                    {{item.Password}}
                </td>
                <td class="has-text-centered">
                    <router-link 
                    :to="{name:'Edit', params: {id:item.idUsers} }"
                    class="button is-info is-small">Edit</router-link>
                </td>
            </tr>
        </tbody>
    </table>
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
    
async loginUser(){
    try{
        await axios.post("http://localhost:5000/login/", 
        {
          username: this.Username,
  password: this.Password,
    });
    this.$router.push("/posts"); 
}
catch(err){
    console.log(err);
}
}
    
    },
}


</script>

<style>
</style>