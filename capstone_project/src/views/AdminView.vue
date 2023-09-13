<template>
  <div>
      <h1>Courses...</h1>


      <AddCourse/>

         <!-- table for courses-->
         <div v-if="courses" class="container-fluid" id="table_position">
            <table class="container-fluid-2">
              <thead>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Course Function</th>
                <th>Course Description</th>
                <th>Course Discount Price</th>
                <th>Course Price</th>
                <th>Course Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
  
  
                <tbody>
                    <tr v-for="course in courses" :key="course.id">
                      <td>{{ course.courseID }}</td>
                      <td>{{ course.courseName }}</td>
                      <td>{{ course.coursePurpose }}</td>
                      <td>{{ course.courseDesc }}</td>
                      <td>{{ course.discountPrice }}</td>
                      <td>{{ course.coursePrice }}</td>
                      <td><img :src="course.courseImage " :alt="course.courseName"></td>
                      <td><UpdateCourse/></td>
                      <td><button type="button" @click="deleteCourse(course.courseID)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
      
      
      
      
      
        <h1>Appointments...</h1>
         <!-- table for appointments-->
         <div v-if="appointments" class="container-fluid" id="table_position">
            <table class="container-fluid-2">
              <thead>
                <th>Appointment ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Marital Status</th>
                <th>Email Address</th>
                <th>Cellphone Number</th>
                <th>Appointment Time</th>
                <th>Weight</th>
                <th>Height</th>
                <th>Disabilities</th>
                <th>Injuries</th>
                <th>Health Issues</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
  
  
                <tbody>
                    <tr v-for="appointment in appointments" :key="appointment.id">
                      <td>{{ appointment.appointID }}</td>
                      <td>{{ appointment.firstName }}</td>
                      <td>{{ appointment.lastName }}</td>
                      <td>{{ appointment.userAge }}</td>
                      <td>{{ appointment.gender }}</td>
                      <td>{{ appointment.maritalStatus }}</td>
                      <td>{{ appointment.emailAdd }}</td>
                      <td>{{ appointment.cellNumber }}</td>
                      <td>{{ appointment.appointTime }}</td>
                      <td>{{ appointment.userWeight }}</td>
                      <td>{{ appointment.userHeight }}</td>
                      <td>{{ appointment.userDisability }}</td>
                      <td>{{ appointment.userInjury }}</td>
                      <td>{{ appointment.userHealth }}</td>
                      <td><UpdateAppointment/></td>
                      <td><button type="button" @click="deleteAppointment(appointment.appointID)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
       
       
       
       
       
        <h1>Users...</h1>

        <AddUser/>
         <!-- table for users-->
         <div v-if="users" class="container-fluid" id="table_position">
            <table class="container-fluid-2">
              <thead>
                <th>User ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Marital Status</th>
                <th>Email Address</th>
                <th>Cellphone Number</th>
                <th>User Image</th>
                <th>User Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
  
  
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td>{{ user.userID }}</td>
                      <td>{{ user.firstName }}</td>
                      <td>{{ user.lastName }}</td>
                      <td>{{ user.userAge }}</td>
                      <td>{{ user.gender }}</td>
                      <td>{{ user.maritalStatus }}</td>
                      <td>{{ user.emailAdd }}</td>
                      <td>{{ user.cellNumber }}</td>
                      <td>{{ user.userProfile }}</td>
                      <td>{{ user.userRole }}</td>
                      <td><UpdateUser/></td>
                      <td><button type="button" @click="deleteUser(user.userID)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>



    </div>
</template>

<script>
import UpdateCourse from '@/components/UpdateCourse.vue';
import UpdateAppointment from '../components/UpdateAppointment.vue';
import UpdateUser from '../components/UpdateUser.vue';
import AddCourse from '../components/AddCourse.vue';
import AddUser from '../components/AddUser.vue';


export default {
  components: {
    UpdateCourse,
    UpdateAppointment,
    UpdateUser,
    AddCourse,
    AddUser
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
</style>