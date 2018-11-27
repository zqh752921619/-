<template>
    <div>
        <h2 class="sub-header">Hero List</h2>
                <a class="btn btn-success" href="add.html" @click.prevent="showAddVue()">Add</a>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>名字</th>
                                <th>性别</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v,i) in list" :key="i">
                                <td>{{v.id}}</td>
                                <td>{{v.name}}</td>
                                <td>{{v.gender}}</td>
                                <td>
                                    <a @click.prevent="showEditVue(v.id)">edit</a> &nbsp;&nbsp;
                                    <a @click.prevent="delData(v.id)">delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            list:[]
        }
    },
    mounted() {
        this.getData()
    },
    methods:{
        showEditVue(ID){
            this.$router.push({
                name:'edit',
                params:{id:ID}
            })
        },
        showAddVue(){
            this.$router.push({name:'add'})
        },
        getData(){
            this.axios.get('heroes').then((res)=>{
                const {status,data}=res
                if(status===200){
                    this.list=data
                }
            })
        },
        delData(ID){
            if(confirm('是否真的要删除')){
            this.axios.delete('heroes/'+ID).then((res)=>{
                this.getData()
            })
            }
        }
    }

}
</script>

<style>

</style>
