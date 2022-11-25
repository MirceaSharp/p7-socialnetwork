<template>
    <div>
        <router-link :to="{name:'Create'}" class="button is-succes mt-5">Add new</router-link>
    
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
        <thread>
            <tr>
                <th>Product Name</th>
            </tr>
        </thread>
        <tbody>
            <tr v-for="item in items" :key="item.idUsers">
                <td>
                   {{item.Username}}
                </td>
                <td>
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