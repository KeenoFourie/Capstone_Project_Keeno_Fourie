<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop12">Edit</button>
  
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop12" data-bs-backdrop="staticnjbhv" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabelnjkbh" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
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
                <input type="course_Image" class="form-control" id="exampleDropdown" v-model="editedUser.userProfile" placeholder="User Image..." required oninvalid="this.setCustomValidity('Please Enter A Appointment Time')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Image" class="form-control" id="exampleDropdown" v-model="editedUser.userRole" placeholder="User Role..." required oninvalid="this.setCustomValidity('Please Enter Your Weight')" oninput="this.setCustomValidity('')">
              </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn" @click.prevent="updatedUser" data-bs-dismiss="modal">Edit</button>
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
        // clears all the inputs
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
        }
        setTimeout(this.fetchUsers, 1000);
    },
    fetchUsers() {
        this.$store.dispatch("fetchUsers")
    },
}
}
</script>

<style scoped>
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
</style>