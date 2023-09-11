<template>
    <div>
        <div v-for="item in cart" :key="item.cartID" id="view_one_position">
            <img id="view_once_image" :src="item.courseImage" :alt="item.courseName">
            <div id="text_view_once">
                <h2>R{{item.discountPrice}}</h2>
                <h6>R{{item.coursePrice}}</h6>
                <h1>{{item.courseName}}</h1>
                <h4>{{item.coursePurpose}}</h4>   
                <div id="line"></div>
                <h5>{{item.courseDesc}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["cartID"],
    created() {
            this.$store.dispatch("fetchCarts")
    },
    computed: {
        cart() {
              return this.$store.state.cart
            }
        }
    }
</script>

<style scoped>

</style>