<template>
    <el-table :data="tableData.data" style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-table :data="props.row.users" style="width: 100%">
                        <el-table-column prop="id" label="id" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="name" width="180">
                        </el-table-column>
                        <el-table-column prop="email" label="email" width="220">
                        </el-table-column>
                        <el-table-column prop="role" label="role" width="180">
                        </el-table-column>
                        <el-table-column prop="createdAt" label="createdAt" width="220">
                        </el-table-column>
                    </el-table>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column label="groupId" prop="groupId">
        </el-table-column>
        <el-table-column label="groupName" prop="groupName">
        </el-table-column>
    </el-table>
</template>

<script>

export default {
    data() {
        return {
            tableData: {
                "status": "success",
                "data": [
                    {
                        "groupId": 1,
                        "groupName": "Admin Group",
                        "users": [
                            {
                                "id": 1,
                                "name": "John Doe",
                                "email": "john.doe@example.com",
                                "role": "admin1",
                                "createdAt": "2023-01-01T00:00:00Z"
                            },
                            {
                                "id": 2,
                                "name": "John Doe",
                                "email": "john.doe@example.com",
                                "role": "admin2",
                                "createdAt": "2023-01-01T00:00:00Z"
                            },
                            // 更多用户...
                        ]
                    },
                    {
                        "groupId": 2,
                        "groupName": "Editor Group",
                        "users": [
                            // ...
                        ]
                    },
                    // 更多用户组...
                ]
            }
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        time(time) {
            let date = new Date(time);
            // console.log(date.toLocaleString())   
            return date.toLocaleDateString();
        },
        fetchData() {
            // 假设这是从API获取数据的函数  
            // 这里使用静态数据代替  
            this.apiData = {
                "status": "success",
                "data": [
                    // ... 提供的数据格式  
                ]
            };

            if (this.apiData.status === 'success') {
                this.groupedUsers = this.apiData.data;
                this.totalItems = this.groupedUsers.length;
            }
        },
        sortChange({ column, prop, order }) {
            this.sort = { prop, order };
            // 在这里可以执行排序逻辑，例如重新排序 this.groupedUsers  
        },
        handleSizeChange(val) {
            this.pageSize = val;
            // 在这里可以执行分页逻辑，例如重新获取数据  
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            // 在这里可以执行分页逻辑，例如重新获取数据  
        },
        formatDate(dateStr) {
            // 转换日期格式为 'YYYY-MM-DD HH:mm:ss'  
            const date = new Date(dateStr);
            return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
        }
    }
};  
</script>

<style>
.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>