<template>
  <div>
    <div id="total_price">
      <div id="price">Total Price: R {{ decimalSpace(getTotal) }}</div>
      <router-link class="btn" aria-current="page" :to="{ name: 'checkout', query: { totalPrice: getTotal } }">Checkout</router-link>
    </div>

    <!-- table for courses-->
    <div v-if="cart" class="container-fluid" id="table_position">
      <table class="container-fluid-2">
        <thead>
          <th>Course Name</th>
          <th id="display_none">Course Function</th>
          <th id="display_none">Course Description</th>
          <th>Course Price</th>
          <th>Course Image</th>
          <th>Delete</th>
        </thead>

        <tbody>
          <tr v-for="item in cart" :key="item.cartID">
            <td>{{ item.courseName }}</td>
            <td id="display_none">{{ item.coursePurpose }}</td>
            <td id="display_none">{{ item.courseDesc }}</td>
            <td>{{ item.discountPrice }}</td>
            <td><img :src="item.courseImage" :alt="item.courseName"></td>
            <td><button @click.prevent="remove(item.cartID)">Delete</button></td>
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
      const cartData = JSON.parse(localStorage.getItem("cart"));
      this.$store.commit("setCart", cartData);
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    getTotal() {
      return this.$store.getters.getTotal;
    }
  },
  methods: {
decimalSpace(price) {
  return price.toFixed(2);
},



remove(cartID) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];  // retrieve from local storage
  const numItem = cartData.findIndex(item => item.cartID === cartID); // search for item with cartID that matches provided cartID
  if (numItem !== -1) cartData.splice(numItem, 1); // item found will be deleted/removed
  localStorage.setItem("cart", JSON.stringify(cartData)); // updates cart
  JSON.parse(localStorage.getItem("cart"));
  this.$store.commit("setCart", cartData);  // fetch to not show deleted item
},
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
tbody {
  height: 50vh;
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
button {
  color: rgba(255, 0, 0, 0.444);
  text-decoration: none;
  background-color: none;
  background: none;
  border: none;
}
button:hover {
  color: red;
}







@media (width< 490px) {
  #display_none {
    display: none;
  }
}


@media (width< 320px) {
  img {
    height: 5rem;
  }
}






</style>