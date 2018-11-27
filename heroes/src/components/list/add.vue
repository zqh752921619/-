<template>
    <div>
        <h2 class="sub-header">Add Hero</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="请输入英雄名称" v-model="formdata.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入英雄性别" v-model="formdata.gender">
          </div>
          <button type="submit" class="btn btn-success" @click.prevent="handleAddHero()">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            formdata:{
                name:'',
                gender:''
            }
        }
    },
    methods:{
        handleAddHero(){
            this.axios.post('heroes',this.formdata).then(res=>{
                this.$router.push({
                    name:'heroes'
                })
            })
        }
    }
}
</script>

<style>

</style>
