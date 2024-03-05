<template>
    <el-table :data="datas.data" :default-sort="{ prop: 'registrationDate', order: 'descending' }" style="width: 100%">
        <el-table-column prop="_id" label="id" width="50">
        </el-table-column>
        <el-table-column prop="username" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="220">
        </el-table-column>
        <el-table-column prop="registrationDate" sortable label="注册日期" width="180">
        </el-table-column>
        <el-table-column prop="status.description" label="活跃度" width="180">
        </el-table-column>
        <el-table-column prop="_id" label="操作" width="400">
            <template slot-scope="props">
                <el-row>
                    <el-button type="primary" @click="amend">编辑</el-button>
                    <el-button type="success">启用</el-button>
                    <el-button type="danger">禁用</el-button>
                    <el-button type="danger" @click="open(props.row._id)">删除</el-button>
                </el-row>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            datas: {}
        }
    },

    methods: {
        open(id) {
            this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                
                for (let index = 0; index < this.datas.data.length; index++) {
                    if (this.datas.data[index]._id == id) {
                        this.datas.data.splice(index, 1)
                        console.log(this.datas);
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        break
                    }

                }

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        amend() {
            this.$alert('<input value="this.datas.data[0].username" >', 'HTML 片段', {
            dangerouslyUseHTMLString: true
            });
        }
    },
    mounted() {
        let that = this
        axios.get('/datas/five')
            .then(function (response) {
                console.log(response.data);
                if (response.data.status == 200) {
                    that.datas = response.data
                } else {
                    alert("失败")
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
</script>

<style>
.button {
    height: 60px;
}
</style>