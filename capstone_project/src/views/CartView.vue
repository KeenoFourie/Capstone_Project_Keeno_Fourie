<template>
    <div>
    <div id="total_price">
        <div id="price">Total Price: R {{ decimalSpace(getTotal) }}</div>
        <router-link class="btn" aria-current="page" :to="{name:'checkout', query:{totalPrice: getTotal}}">Checkout</router-link>
    </div>

    <!-- table for courses-->
    <div v-if="cart" class="container-fluid" id="table_position">
    <table class="container-fluid-2">
        <thead>
            <th>Course Name</th>
            <th>Course Function</th>
            <th>Course Description</th>
            <th>Course Price</th>
            <th>Course Image</th>
            <th>Delete</th>
        </thead>
        
        
        <tbody>
            <tr v-for="item in cart" :key="item.cartID">
              <td>{{ item.courseName }}</td>
              <td>{{ item.coursePurpose }}</td>
              <td>{{ item.courseDesc }}</td>
              <td>{{ item.discountPrice }}</td>
              <td><img :src="item.courseImage " :alt="item.courseName"></td>
              <td><button @click.prevent="remove()">Delete</button></td>
            </tr>
        </tbody>
    </table>
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
    },
    getTotal() {
        return this.$store.getters.getTotal;
    }
    },
    methods: {
    decimalSpace(price) {
      return price.toFixed(2);
    }
  }
}
</script>

<style scoped>
#table_position {
    display: flex;
    justify-content: center;
  }
table {
    width: 95%;
    margin-bottom: 2rem;
  }
th, td {
    border: 1px solid black;
  }
#prices {
    width: 20%;
}
#text {
    width: 60%;
}
#text_view_once {
    display: flex;
    align-items: center;
    border: 1px solid black;
}
img {
    height: 8rem;
}
.btn {
    color: rgba(0, 0, 0, 0.437);
    border: none;
}
.btn:hover {
    color: black;
}
#price {
    padding: 0.5rem;
}
#total_price {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: yellow;
    border: 2px solid black;
    border-right: none;
    border-left: none;
    z-index: 1; 
    margin-bottom: 2rem;
}
</style>