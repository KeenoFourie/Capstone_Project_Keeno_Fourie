<template>
    <div id="edit_user">

        <h1>Profile...</h1>

        <div class="modal-body">
            <div class="mb">
                <input type="course_ID" class="form-control" id="exampleDropdown" v-model="editedUser.userID" placeholder="User ID..." required oninvalid="this.setCustomValidity('Please Enter A Appointment ID')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Name" class="form-control" id="exampleDropdown" v-model="editedUser.firstName" placeholder="Name..." required oninvalid="this.setCustomValidity('Please Enter Your Name')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Target" class="form-control" id="exampleDropdown" v-model="editedUser.lastName" placeholder="Surname..." required oninvalid="this.setCustomValidity('Please Enter Your Surname')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Description" class="form-control" id="exampleDropdown" v-model="editedUser.userAge" placeholder="Age..." required oninvalid="this.setCustomValidity('Please Enter Your Age')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Discount_Price" class="form-control" id="exampleDropdown" v-model="editedUser.gender" placeholder="Gender..." required oninvalid="this.setCustomValidity('Please Enter Your Gender')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Price" class="form-control" id="exampleDropdown" v-model="editedUser.maritalStatus" placeholder="Marital Status..." required oninvalid="this.setCustomValidity('Please Enter A Marital Status')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Image" class="form-control" id="exampleDropdown" v-model="editedUser.emailAdd" placeholder="Email Address..." required oninvalid="this.setCustomValidity('Please Enter An Email Address')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Image" class="form-control" id="exampleDropdown" v-model="editedUser.cellNumber" placeholder="Cellphone Number..." required oninvalid="this.setCustomValidity('Please Enter A Cellphone Number')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Image" class="form-control" id="exampleDropdown" v-model="editedUser.userProfile" placeholder="Appointment Time..." required oninvalid="this.setCustomValidity('Please Enter A Appointment Time')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Image" class="form-control" id="exampleDropdown" v-model="editedUser.userRole" placeholder="Weight in kg..." required oninvalid="this.setCustomValidity('Please Enter Your Weight')" oninput="this.setCustomValidity('')">
              </div>
        </div>
        <div class="modal-footer">
            <router-link class="btn" aria-current="page" to="/account">Back</router-link>
            <button type="button" class="btn" @click.prevent="updatedUser" data-bs-dismiss="modal">Edit</button>
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
        updatedUser() {
        this.$store.dispatch("updatedUser", this.editedUser);
        setTimeout(this.fetchUsers, 1000);
    },
    fetchUsers() {
        this.$store.dispatch("fetchUsers")
    },
}
}
</script>

<style scoped>
.btn {
    color: grey;
    text-decoration: none;
    background-color: yellow;
    border-radius: 0rem;
    padding: 0.5rem;
    padding-inline: 3rem;
    margin: 1rem 5rem 1rem;
}
.btn:hover {
    color: yellow;
    text-decoration: none;
    background-color: grey;
    border: none;
}
h1 {
    color: black;
    margin: 1rem;
}
#edit_user {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mb {
    width: 100%;
}
.modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: auto;
}
input {
  border: 1px solid black;
  border-radius: 0rem;
}
input {
    margin-bottom: 0.5rem;
}
</style>