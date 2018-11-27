<template>
     <div>
        <h2 class="sub-header">Add Hero</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input type="email" class="form-control" id="exampleInputEmail1" 
            v-model="formdata.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input type="text" class="form-control" id="exampleInputPassword1" 
            v-model="formdata.gender">
          </div>
          <button type="submit" class="btn btn-success" 
          @click.prevent="handleEdit()">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            formdata:{}
        }
    },
    mounted() {
        this.getHeroById()
    },
    methods:{
        getHeroById(){
            this.axios.get('heroes/'+this.$route.params.id).then(res=>{
                this.formdata=res.data
            })
        },
        handleEdit(){
            this.axios.put('heroes/'+this.$route.id,this.formdata)
            .then(res=>{
                this.formdata=res.data
            })
        }
    }
}
</script>

<style>

</style>
