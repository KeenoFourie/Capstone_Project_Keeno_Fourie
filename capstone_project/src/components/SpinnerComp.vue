<template>
  <div>
    <div class="d-flex justify-content-center" id="spinner_component">
        <button class="btn" type="button" disabled>
            <span class="spinner-border" aria-hidden="true"></span>
          </button>
      </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
#spinner_component {
    height: 60vh;
}
.btn {
    background: none;
    border: none;
    color: yellow;
}
</style>