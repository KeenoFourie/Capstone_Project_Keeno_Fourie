<template>
  <div>
      <h1>Courses...</h1>


      <AddCourse/>

         <!-- table for courses-->
         <div v-if="courses" class="container-fluid" id="table_position">
            <table class="container-fluid-2">
              <thead>
                <th id="display_nothing">Course ID</th>
                <th>Course Name</th>
                <th id="display_no">Course Function</th>
                <th id="display_nothing">Course Description</th>
                <th>Course Discount Price</th>
                <th id="display_none">Course Price</th>
                <th id="display_no">Course Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
  
  
                <tbody>
                    <tr v-for="course in courses" :key="course.id">
                      <td id="display_nothing">{{ course.courseID }}</td>
                      <td>{{ course.courseName }}</td>
                      <td id="display_no">{{ course.coursePurpose }}</td>
                      <td id="display_nothing">{{ course.courseDesc }}</td>
                      <td>{{ course.discountPrice }}</td>
                      <td id="display_none">{{ course.coursePrice }}</td>
                      <td id="display_no"><img :src="course.courseImage " :alt="course.courseName"></td>
                      <td><UpdateCourse/></td>
                      <td><button type="button" @click="deleteCourse(course.courseID)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!-- spinner -->
        <div v-else class="row justify-content-center gap-3">
          <SpinnerComp/>
        </div>
      
      
      
      
      
        <h1>Appointments...</h1>
         <!-- table for appointments-->
         <div v-if="appointments" class="container-fluid" id="table_position">
            <table class="container-fluid-2">
              <thead>
                <th id="display_none">Appointment ID</th>
                <th>Name</th>
                <th id="display_no">Surname</th>
                <th id="display_no">Age</th>
                <th id="display_no">Gender</th>
                <th id="display_none">Marital Status</th>
                <th id="display_nothing">Email Address</th>
                <th id="display_none">Cellphone Number</th>
                <th>Appointment Time</th>
                <th id="display_none">Weight</th>
                <th id="display_none">Height</th>
                <th id="display_none">Disabilities</th>
                <th id="display_none">Injuries</th>
                <th id="display_none">Health Issues</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
  
  
                <tbody>
                    <tr v-for="appointment in appointments" :key="appointment.id">
                      <td id="display_none">{{ appointment.appointID }}</td>
                      <td>{{ appointment.firstName }}</td>
                      <td id="display_no">{{ appointment.lastName }}</td>
                      <td id="display_no">{{ appointment.userAge }}</td>
                      <td id="display_no">{{ appointment.gender }}</td>
                      <td id="display_none">{{ appointment.maritalStatus }}</td>
                      <td id="display_nothing">{{ appointment.emailAdd }}</td>
                      <td id="display_none">{{ appointment.cellNumber }}</td>
                      <td>{{ appointment.appointTime }}</td>
                      <td id="display_none">{{ appointment.userWeight }}</td>
                      <td id="display_none">{{ appointment.userHeight }}</td>
                      <td id="display_none">{{ appointment.userDisability }}</td>
                      <td id="display_none">{{ appointment.userInjury }}</td>
                      <td id="display_none">{{ appointment.userHealth }}</td>
                      <td><UpdateAppointment/></td>
                      <td><button type="button" @click="deleteAppointment(appointment.appointID)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!-- spinner -->
        <div v-else class="row justify-content-center gap-3">
          <SpinnerComp/>
        </div>
       
       
       
       
       
        <h1>Users...</h1>

        <AddUser/>
         <!-- table for users-->
         <div v-if="users" class="container-fluid" id="table_position">
            <table class="container-fluid-2">
              <thead>
                <th id="display_nothing">User ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th id="display_no">Age</th>
                <th id="display_no">Gender</th>
                <th id="display_none">Marital Status</th>
                <th id="display_nothing">Email Address</th>
                <th id="display_none">Cellphone Number</th>
                <th id="display_none">User Image</th>
                <th id="display_no">User Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
  
  
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td id="display_nothing">{{ user.userID }}</td>
                      <td>{{ user.firstName }}</td>
                      <td>{{ user.lastName }}</td>
                      <td id="display_no">{{ user.userAge }}</td>
                      <td id="display_no">{{ user.gender }}</td>
                      <td id="display_none">{{ user.maritalStatus }}</td>
                      <td id="display_nothing">{{ user.emailAdd }}</td>
                      <td id="display_none">{{ user.cellNumber }}</td>
                      <td id="display_none">{{ user.userProfile }}</td>
                      <td id="display_no">{{ user.userRole }}</td>
                      <td><UpdateUser/></td>
                      <td><button type="button" @click="deleteUser(user.userID)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>







         <!-- spinner -->
         <div v-else class="row justify-content-center gap-3">
          <SpinnerComp/>
        </div>



    </div>
</template>

<script>
import UpdateCourse from '@/components/UpdateCourse.vue';
import UpdateAppointment from '../components/UpdateAppointment.vue';
import UpdateUser from '../components/UpdateUser.vue';
import AddCourse from '../components/AddCourse.vue';
import AddUser from '../components/AddUser.vue';
import SpinnerComp from '../components/SpinnerComp.vue';


export default {
  components: {
    UpdateCourse,
    UpdateAppointment,
    UpdateUser,
    AddCourse,
    AddUser,
    SpinnerComp
},
    computed: {
      courses() {
          return this.$store.state.courses
      },
      appointments() {
          return this.$store.state.appointments
      },
      users() {
          return this.$store.state.users
      }
  },
  methods: {
    deleteCourse(courseID) {
          this.$store.dispatch("deleteCourse", courseID)
        },
    deleteAppointment(appointID) {
          this.$store.dispatch("deleteAppointment", appointID)
        },
    deleteUser(userID) {
          this.$store.dispatch("deleteUser", userID)
        }
    },
      mounted() {
          this.$store.dispatch('fetchCourses'),
          this.$store.dispatch('fetchAppointments'),
          this.$store.dispatch('fetchUsers')
      }
};
</script>

<style scoped>
#table_position {
  display: flex;
  justify-content: center;
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
th, td {
  border: 1px solid black;
}
img {
  height: 8rem;
}
table {
  width: 95%;
  margin-bottom: 2rem;
}
h1 {
  color: black;
  padding: 2rem;
}





@media (width< 1200px) {
  #display_none {
    display: none;
  }
}


@media (width< 700px) {
  #display_nothing {
    display: none;
  }
}

@media (width< 480px) {
  #display_no {
    display: none;
  }
}



</style>