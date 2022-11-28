<template>
    <div>
        <router-link :to="{name:'Create'}" class="button is-succes mt-5">Sign Up</router-link>
    

</div>
</template>

<script>
import axios from "axios"
export default{
data(){
    return{
        items: [],
    };
},
created(){
    this.getProducts();
},
methods:{
    async getProducts(){
        try{
            const response= await axios.get("http://localhost:5000/products");
            this.items=response.data
            console.log(this.items);
        }catch(err){
            console.log(err);
        }
    }
}

};

</script>

<style>
</style>