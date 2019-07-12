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
        formData:{
            id:0,
            name:"",
            age:0,
            isEdit:false
        }
    },
    methods: {
        useA: function () {
            return userData;
        },
        getData: function (index, num) {
            console.log(userData.slice(index, index + num))
            return userData.slice(index, index + num);
        },
        deleteData: function (index) {
            var arrayIndex = (this.index - 1) * 5 + index;
            this.userData.splice(arrayIndex, 1);
        },
        addData: function(){
            if(this.formData.name == ""){
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