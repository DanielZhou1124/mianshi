<template>
  <div>
    <div class="list">
        <div class="goods" v-for="(data,index) in datas.data" :key="index">
            <!-- <img :src=require('data.images') alt=""> -->
            <span>名称:{{ data.name}}</span>
            <span>价格:{{ data.price }}</span>
            <span>平均评分:{{  }}</span>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
        return{
            datas:{
                "status": "success",
                "data": [
                    {
                        "id": 1,
                        "name": "Product 1",
                        "description": "Description for Product 1",
                        "price": 99.99,
                        "category": {
                            "id": 1,
                            "name": "Electronics"
                        },
                        "images": ["../src/a.jpg", "a.jpg"],
                        "reviews": [
                            {
                                "id": 1,
                                "rating": 4,
                                "comment": "Great product!",
                                "author": "John Doe"
                            },
                        ]
                    },
                    {
                        "id": 2,
                        "name": "Product 2",
                        "description": "Description for Product 2",
                        "price": 199.99,
                        "category": {
                            "id": 2,
                            "name": "Electronics"
                        },
                        "images": ["../src/a.jpg", "../src/a.jpg"],
                        "reviews": [
                            {
                                "id": 2,
                                "rating": 4,
                                "comment": "Great product!",
                                "author": "John Doe"
                            },
                        ]
                    },
                    {
                        "id": 3,
                        "name": "Product 3",
                        "description": "Description for Product 3",
                        "price": 999.99,
                        "category": {
                            "id": 3,
                            "name": "Electronics"
                        },
                        "images": ["../src/a.jpg", "../src/a.jpg"],
                        "reviews": [
                            {
                                "id": 3,
                                "rating": 4,
                                "comment": "Great product!",
                                "author": "John Doe"
                            },
                        ]
                    },
                ]
            }
        }
    }
}
</script>

<style>

img{
    height: 150px;
    width: 150px;
}
.goods{
    height: 300px;
    width: 150px;
    border: 1px solid rgb(56, 54, 54);
}
</style>