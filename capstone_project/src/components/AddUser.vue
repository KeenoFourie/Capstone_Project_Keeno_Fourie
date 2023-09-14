<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop12" id="plus_user">+ User</button>
  
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop12" data-bs-backdrop="staticnjbhv" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabelnjkbh" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mb">
                <input type="first_name" class="form-control" id="exampleDropdown" v-model="newUser.firstName" placeholder="Name..." required oninvalid="this.setCustomValidity('Please Enter Your Name')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="last_name" class="form-control" id="exampleDropdown" v-model="newUser.lastName" placeholder="Surname..." required oninvalid="this.setCustomValidity('Please Enter Your Surname')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="user_age" class="form-control" id="exampleDropdown" v-model="newUser.userAge" placeholder="Age..." required oninvalid="this.setCustomValidity('Please Enter Your Age')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="gender" class="form-control" id="exampleDropdown" v-model="newUser.gender" placeholder="Gender..." required oninvalid="this.setCustomValidity('Please Enter Your Gender')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="marital_status" class="form-control" id="exampleDropdown" v-model="newUser.maritalStatus" placeholder="Marital Status..." required oninvalid="this.setCustomValidity('Please Enter A Marital Status')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="user_email" class="form-control" id="exampleDropdown" v-model="newUser.emailAdd" placeholder="Email Address..." required oninvalid="this.setCustomValidity('Please Enter An Email Address')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="password" class="form-control" id="exampleDropdown" v-model="newUser.userPassword" placeholder="Password..." required oninvalid="this.setCustomValidity('Please Enter A Password')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="cellphone_number" class="form-control" id="exampleDropdown" v-model="newUser.cellNumber" placeholder="Cellphone Number..." required oninvalid="this.setCustomValidity('Please Enter A Cellphone Number')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="user_profile" class="form-control" id="exampleDropdown" v-model="newUser.userProfile" placeholder="User Image..." required oninvalid="this.setCustomValidity('Please Enter A Appointment Time')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="user_role" class="form-control" id="exampleDropdown" v-model="newUser.userRole" placeholder="User Role..." required oninvalid="this.setCustomValidity('Please Enter Your Weight')" oninput="this.setCustomValidity('')">
              </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn" @click.prevent="addUser()" data-bs-dismiss="modal">Add User</button>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
    export default {
data() {
  return {
    newUser: {
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        maritalStatus: "",
        emailAdd: "",
        userPassword: "",
        cellNumber: "",
        userProfile: "https://i.postimg.cc/j5xPwv35/profile-image.webp",
        userRole: "",
    }
  }
},
methods: {
  addUser(){
    this.$store.dispatch('register', this.newUser);


    // clears all the inputs
    this.newUser = {
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
    setTimeout(this.fetchUsers, 1000);
    },
    fetchUsers() {
        this.$store.dispatch("fetchUsers")
    },
}
  }
</script>

<style scoped>
#plus_user {
    position: relative;
    left: 42rem;
    margin: 0rem;
    padding: 0rem;
    height: 0rem;
    bottom: 5.1rem;
}
.modal-content {
  border-radius: 0rem;
}
input {
  border: 1px solid black;
  border-radius: 0rem;
}
.modal-footer {
    display: flex;
    justify-content: center;
}
.btn {
    color: rgba(0, 128, 0, 0.538);
    text-decoration: none;
    background-color: none;
    background: none;
    border: none;
}
.btn:hover {
    color: rgb(0, 185, 0);
    text-decoration: none;
    background-color: none;
    background: none;
    border: none;
}
input {
    margin-bottom: 0.5rem;
}






@media (width< 1300px) {
  #plus_user {
    display: contents;
}
}







</style>