import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import List from "../components/list/list.vue"
import Bar from "../components/bar/bar.vue"
import Foo from "../components/foo/foo.vue"
import Add from "../components/list/add.vue"
import Edit from "../components/list/edit.vue"
var routes=[{
    name:'heroes',
    path:'/heroes',
    component:List
},{
    name:'bar',
    path:'/bar',
    component:Bar
},{
    name:'foo',
    path:'/foo',
    component:Foo
},{
    name:'add',
    path:'/add',
    component:Add
},{
    name:'edit',
    path:'/edit/:id',
    component:Edit
}]
var router = new VueRouter({
    linkExactActiveClass:'active',
    routes
})
export default router

