<template>
    <div>
      <h1>Checkout Page</h1>
      <p>Total Price: R {{ totalPrice }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalPrice: 0, // Initialize with a default value
      };
    },
    mounted() {
      this.totalPrice = parseFloat(this.$route.query.totalPrice) || 0; // Parse the query parameter to a number
      console.log('Total Price:', this.totalPrice);
    },
  };
  </script>
  
  <style scoped>
  /* Your CSS styles */
  </style>
 