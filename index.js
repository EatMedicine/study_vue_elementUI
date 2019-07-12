Vue.component('my-table', {
    data:function(){
        return{
            index: 0,
            isDialogOpen: false,
            formData: {
                id: 0,
                name: "",
                age: 0,
                isEdit: false
            },
            tableSize:5,
            search: ""
        }
    },
    props: ['data'],
    methods:{
        getData: function (index, num) {
            return this.data.slice(index, index + num);
        },
        deleteData: function (index) {
            var arrayIndex = (this.index - 1) * this.tableSize + index;
            this.data.splice(arrayIndex, 1);
        },
        addData: function () {
            if (this.formData.name == "") {
                this.$message.error("请输入姓名");
                return;
            }
            this.data.push(this.formData)
            this.formData={
                id: 0,
                name: "",
                age: 0,
                isEdit: false
            }
        }
    },
    computed: {
        showData: function () {
            return this.data.filter(tmp=>
                !this.search||tmp.name.indexOf(this.search)!=-1
            ).slice((this.index - 1) * this.tableSize, (this.index - 1) * this.tableSize + this.tableSize);
        },
        dataLength: function () {
            return this.data.filter(tmp=>
                !this.search||tmp.name.indexOf(this.search)!=-1
            ).length;
        }
    },
    template: `
    <div>
        <el-row type="flex" justify="center">
            <el-col :span="13">
                <el-row type="flex" justify="end">
                    <el-col :span="4">
                        <el-input v-model="search" size="small"
                            placeholder="输入关键字搜索"
                        ></el-input>
                    </el-col>
                </el-row>
                <el-table :data="showData" stripe :default-sort='{prop:"id",order:"ascending"}'>
                    <el-table-column label="ID" width="200" prop="id">
                        <template v-slot="{row}">
                            <el-input v-if="row.isEdit" v-model="row.id" size="small"></el-input>
                            <span v-else>{{row.id}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="姓名" width="300" prop="name">
                        <template v-slot="{row}">
                            <el-input v-if="row.isEdit" v-model="row.name" size="small"></el-input>
                            <div v-else>
                                <i class="el-icon-user"></i>
                                <span>{{row.name}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="年龄" width="100" prop="age">
                        <template v-slot="{row}">
                            <el-input v-if="row.isEdit" v-model="row.age" size="small"></el-input>
                            <span v-else>{{row.age}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="right">
                        <template slot="header">
                            <el-button circle type="primary" size="small" icon="el-icon-document-add"
                                @click="isDialogOpen=!isDialogOpen"></el-button>
                        </template>
                        <template v-slot="data">
                            <div v-if="data.row.isEdit">
                                <el-button plain icon="el-icon-finish" size="small"
                                    @click="data.row.isEdit=false">Save</el-button>
                            </div>
                            <div v-else>
                                <el-button plain icon="el-icon-edit-outline" size="small"
                                    @click="data.row.isEdit=true">Edit</el-button>
                                <el-button plain type="danger" icon="el-icon-delete" size="small" @
                                    @click="deleteData(data.$index)">Delete</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-pagination :total="dataLength" :current-page.sync="index" :page-size="5"
                layout="prev, pager, next"></el-pagination>
        </el-row>
        <el-dialog title="添加数据" :visible.sync="isDialogOpen">
            <el-form :model="formData" :inline="true">
                <el-form-item label="ID">
                    <el-input-number v-model="formData.id"></el-input-number>
                </el-form-item>
                <el-form-item label="name">
                        <el-input v-model="formData.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="age">
                    <el-input-number v-model="formData.age"></el-input-number>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isDialogOpen = false">取 消</el-button>
                <el-button type="primary" @click="isDialogOpen = false;addData();">确 定</el-button>
            </div>
        </el-dialog>
    </div>
    `
})


new Vue({
    el: '#app',
    data: {
        userData: [
            { id: 1, name: "test1", age: 18, isEdit: false },
            { id: 2, name: "test2", age: 10, isEdit: false },
            { id: 3, name: "test3", age: 12, isEdit: false },
            { id: 4, name: "test4", age: 18, isEdit: false },
            { id: 5, name: "test5", age: 14, isEdit: false },
            { id: 6, name: "test6", age: 18, isEdit: false },
            { id: 7, name: "test7", age: 12, isEdit: false },
            { id: 8, name: "test8", age: 18, isEdit: false },
            { id: 9, name: "test9", age: 15, isEdit: false },
            { id: 10, name: "test10", age: 19, isEdit: false },
            { id: 11, name: "test11", age: 18, isEdit: false },
            { id: 12, name: "test12", age: 16, isEdit: false },
            { id: 13, name: "test13", age: 18, isEdit: false },
            { id: 14, name: "test14", age: 15, isEdit: false },
            { id: 15, name: "test15", age: 18, isEdit: false },
            { id: 16, name: "test16", age: 17, isEdit: false },
            { id: 17, name: "test17", age: 11, isEdit: false },
            { id: 18, name: "test18", age: 18, isEdit: false },
            { id: 19, name: "test19", age: 10, isEdit: false },
            { id: 20, name: "test20", age: 12, isEdit: false },

        ],
        index: 0,
        isDialogOpen: false,
        formData: {
            id: 0,
            name: "",
            age: 0,
            isEdit: false
        }
    },
    methods: {
        useA: function () {
            return;
        },
        getData: function (index, num) {
            console.log(userData.slice(index, index + num))
            return userData.slice(index, index + num);
        },
        deleteData: function (index) {
            var arrayIndex = (this.index - 1) * 5 + index;
            this.userData.splice(arrayIndex, 1);
        },
        addData: function () {
            if (this.formData.name == "") {
                this.$message.error("请输入姓名");
                return;
            }
            this.userData.push(this.formData)
        }
    },
    computed: {
        showData: function () {
            return this.userData.slice((this.index - 1) * 5, (this.index - 1) * 5 + 5);
        },
        dataLength: function () {
            return this.userData.length;
        }
    }
})