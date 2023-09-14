<template>
  <div>
    <div id="checkout_page">
      <h2>Checkout</h2>
      <div>
        <label for="card_number">Card Number</label>
        <input id="card_number" type="text" placeholder="1254 5682 1254 5689" required>
      </div>
      <div>
        <label for="expiry_date">Expiry Date</label>
        <p><input id="expiry_date_1" type="text" placeholder="08" required><input id="expiry_date_2" type="text" placeholder="19" required></p>
      </div>
      <div id="cvc_and_zip">
        <div>
          <label for="cvc">CVC</label>
        <input id="cvc" type="text" placeholder="***" required>
        </div>
        <div>
          <label for="zip_code">Zip Code</label>
          <input id="zip_code" type="text" placeholder="15648" required>
        </div>
      </div>
      <button type="submit" @click.prevent="payNow()">Pay R{{ totalPrice }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // default value of 0
      totalPrice: 0, 
    };
  },
  mounted() {
    this.totalPrice = parseFloat(this.$route.query.totalPrice) || 0;
  },
  methods: {
    payNow() {
      alert("Payment Successful")
    }
  }
};
</script>
  
<style scoped>
h2 {
  color: yellow;
  font-weight: bold;
}
button {
  border-radius: 0rem;
  border: 0rem;
  background-color: yellow;
  padding: 0.7rem;
}
button:hover {
  background-color: black;
  color: yellow;
}
input {
  padding: 0.5rem;
}
#zip_code {
  width: 6.2rem;
}
#cvc {
  width: 6.2rem;
}
#cvc_and_zip {
  display: flex;
  flex-direction: row;
}
#expiry_date_1, #expiry_date_2 {
  width: 6.7rem;
}
#checkout_page {
  color: black;
  border: 2px solid black;
  height: 60vh;
  width: 40%;
  margin: 2rem;
}
div {
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}




@media (width< 600px) {
  #checkout_page {
    width: 80%;
  }
}

@media (width< 350px) {
  #checkout_page {
    height: 70vh;
  }
}






</style>
 