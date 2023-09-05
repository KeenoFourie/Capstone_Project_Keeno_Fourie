<template>
    <div>
        <form @submit.prevent="registration">
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">Name</label>
              <input type="name" class="form-control" id="exampleInputName1" v-model="payload.firstName" required placeholder="Name...">
            </div>
            <div class="mb-3">
              <label for="exampleInputSurname1" class="form-label">Surname</label>
              <input type="surname" class="form-control" id="exampleInputSurname1" v-model="payload.lastName" required placeholder="Surname...">
            </div>
            <div class="mb-3">
              <label for="exampleInputAge1" class="form-label">Age</label>
              <input type="age" class="form-control" id="exampleInputAge1" v-model="payload.userAge" required placeholder="Age...">
            </div>
            <div class="mb-3">
              <label for="exampleInputGender1" class="form-label">Gender</label>
              <input type="gender" class="form-control" id="exampleInputGender1" v-model="payload.gender" required placeholder="Gender...">
            </div>
            <div class="mb-3">
              <label for="exampleInputMaritalStatus1" class="form-label">Marital Status</label>
              <input type="marital_status" class="form-control" id="exampleInputMaritalStatus1" v-model="payload.maritalStatus" required placeholder="Marital Status...">
            </div>
            <div class="mb-3">
                <label for="exampleInputCellphoneNumber1" class="form-label">Cellphone Number</label>
                <input type="cellphone_number" class="form-control" id="exampleInputCellphoneNumber1" v-model="payload.cellNumber" required placeholder="Cellphone Number...">
            </div>
            <div class="mb-3">
                <label for="exampleInputUserImage1" class="form-label">User Image</label>
                <input type="user_image" class="form-control" id="exampleInputUserImage1" v-model="payload.userProfile" required placeholder="Image...">
              </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="payload.emailAdd" required placeholder="Email Address...">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" v-model="payload.userPassword" required placeholder="Password...">
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                payload: {
                    firstName: "",
                    lastName: "",
                    userAge: "", 
                    gender: "", 
                    maritalStatus: "", 
                    emailAdd: "",
                    cellNumber: "", 
                    userPassword: "",
                    userProfile: "https://i.postimg.cc/j5xPwv35/profile-image.webp", 
                }
            }
        },
        methods: {
            registration() {
                this.$store.dispatch("addUser", this.payload)
            }
        }
    }
</script>

<style scoped>

</style>