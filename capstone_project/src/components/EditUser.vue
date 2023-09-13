<template>
  <div>
    <h1>Edit Your Profile...</h1>
    <div class="mb">
      <input type="text" v-model="editedUser.userID" placeholder="User ID..." required>
    </div>
    <div class="mb">
      <input type="text" v-model="editedUser.firstName" placeholder="Name..." required>
    </div>
    <div class="mb">
      <input type="text" v-model="editedUser.lastName" placeholder="Surname..." required>
    </div>
    <div class="mb">
      <input type="text" v-model="editedUser.userAge" placeholder="Age..." required>
    </div>
    <div class="mb">
      <input type="text" v-model="editedUser.gender" placeholder="Gender..." required>
    </div>
    <div class="mb">
      <input type="text" v-model="editedUser.maritalStatus" placeholder="Marital Status..." required>
    </div>
    <div class="mb">
      <input type="text" v-model="editedUser.emailAdd" placeholder="Email Address..." required>
    </div>
    <div class="mb">
      <input type="text" v-model="editedUser.cellNumber" placeholder="Cellphone Number..." required>
    </div>
    <div class="mb">
      <input type="text" v-model="editedUser.userProfile" placeholder="User Image..." required>
    </div>
    <div class="mb">
      <input type="text" v-model="editedUser.userRole" placeholder="User Role..." required>
    </div>
    <div>
      <button type="button" class="btn" @click="updateUser">Save changes</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedUser: {
        userID: "",
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        maritalStatus: "",
        emailAdd: "",
        cellNumber: "",
        userProfile: "",
        userRole: "",
      }
    }
  },
  methods: {
    updateUser() {
      this.$store.dispatch("updatedUser", this.editedUser);

      // Clear inputs
      this.editedUser = {
        userID: "",
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        maritalStatus: "",
        emailAdd: "",
        cellNumber: "",
        userProfile: "",
        userRole: "",
      };
    }
  }
}
</script>

<style scoped>
h1 {
  color: black;
  margin: 1rem;
}
button {
  border-radius: 0rem;
  margin-bottom: 2rem;
  text-decoration: none;
  color: #464646;
  background-color: yellow;
  padding: 0.8rem;
  text-shadow: none;
}
button:hover {
  color: yellow;
  background-color: #464646;
}
.mb {
  margin-bottom: 0.5rem;
}
input {
  border: 1px solid black;
  border-radius: 0rem;
  width: 50%;
  height: 2rem;
}
</style>
