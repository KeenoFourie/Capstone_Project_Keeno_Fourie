<template>
  <div>
   
      <h2>Book an Appointment With Our Trainers...</h2>
      <form @submit.prevent="addAppointment" >
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">First Name:</label>
          <input type="firstName" class="form-control" id="exampleDropdown" v-model="newAppointment.firstName" placeholder="First Name..." required oninvalid="this.setCustomValidity('Please Enter Your First Name')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Last Name:</label>
          <input type="lastName" class="form-control" id="exampleDropdown" v-model="newAppointment.lastName" placeholder="Last Name..." required oninvalid="this.setCustomValidity('Please Enter Your Last Name')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Age:</label>
          <input type="userAge" class="form-control" id="exampleDropdown" v-model="newAppointment.userAge" placeholder="Age..." required oninvalid="this.setCustomValidity('Please Enter Your Age')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Gender:</label>
          <input type="gender" class="form-control" id="exampleDropdown" v-model="newAppointment.gender" placeholder="Gender..." required oninvalid="this.setCustomValidity('Please Enter YOur Gender')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Marital Status:</label>
          <input type="maritalStatus" class="form-control" id="exampleDropdown" v-model="newAppointment.maritalStatus" placeholder="Marital Status..." required oninvalid="this.setCustomValidity('Please Insert Your Marital Status')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Email Address:</label>
          <input type="emailAdd" class="form-control" id="exampleDropdown" v-model="newAppointment.emailAdd" placeholder="Email Address..." required oninvalid="this.setCustomValidity('Please Insert Your Email Address')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Cellphone Number:</label>
          <input type="cellNumber" class="form-control" id="exampleDropdown" v-model="newAppointment.cellNumber" placeholder="Cellphone Number..." required oninvalid="this.setCustomValidity('Please Insert Your Cellphone Number')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Appointment Time:</label>
          <input type="appointTime" class="form-control" id="exampleDropdown" v-model="newAppointment.appointTime" placeholder="E.g. 12h00 14 September 2023..." required oninvalid="this.setCustomValidity('Please Insert An Appointment Time')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Your Weight:</label>
          <input type="userWeight" class="form-control" id="exampleDropdown" v-model="newAppointment.userWeight" placeholder="In kg..." required oninvalid="this.setCustomValidity('Please Insert Your Weight')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Your height:</label>
          <input type="userHeight" class="form-control" id="exampleDropdown" v-model="newAppointment.userHeight" placeholder="In cm..." required oninvalid="this.setCustomValidity('Please Insert Your Height')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Disabilities:</label>
          <input type="userDisability" class="form-control" id="exampleDropdown" v-model="newAppointment.userDisability" placeholder="Disabilities..." required oninvalid="this.setCustomValidity('Please Insert Any Disabilities')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Injuries:</label>
          <input type="userInjury" class="form-control" id="exampleDropdown" v-model="newAppointment.userInjury" placeholder="Injuries..." required oninvalid="this.setCustomValidity('Please Insert Any Injuries:')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Health Issues:</label>
          <input type="userHealth" class="form-control" id="exampleDropdown" v-model="newAppointment.userHealth" placeholder="Health Issues..." required oninvalid="this.setCustomValidity('Please Insert Any Health Issues')" oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Why Us:</label>
          <input type="whyUs" class="form-control" id="exampleDropdown" v-model="newAppointment.whyUs" placeholder="Why Us..." required oninvalid="this.setCustomValidity('Please Insert Why You Chose Us')" oninput="this.setCustomValidity('')">
        </div>
        <button type="submit" class="btn" id="add_button">R150.00</button>
      </form>
  </div>
</template>
<script>
export default {
data() {
  return {
    newAppointment: {
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        maritalStatus: '', 
        emailAdd: '',
        cellNumber: '',
        appointTime : '',
        userWeight: '',
        userHeight: '',
        userDisability: '',
        userInjury: '',
        userHealth: '',
        whyUs: '',
    }
  }
},
methods: {
  addAppointment(){
    this.$store.dispatch('addAppointment', this.newAppointment);

    // clears all the inputs
    this.newAppointment = {
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        maritalStatus: '', 
        emailAdd: '',
        cellNumber: '',
        userWeight: '',
        userHeight: '',
        userDisability: '',
        userInjury: '',
        userHealth: '',
        whyUs: '',
    };
  }
}
  }
</script>
<style scoped>
form {
  margin-bottom: 2rem;
}
h2 {
    color: black;
    padding: 1.5rem;
}
.mb-3 {
    display: flex;
    justify-content: center;
}
label {
    color: black;
    width: 20%;
    text-align: right;
    padding: 0.5rem;
}
input {
    width: 50%;
}
#add_button {
    color: grey;
    background-color: yellow;
    padding: 0.5rem;
    border-radius: 0rem;
}
#add_button:hover {
    color: yellow;
    background-color: grey;
    padding: 0.5rem;
    border-radius: 0rem;
}



@media (width< 500px) {
  label {
    display: none;
  }
}


</style>