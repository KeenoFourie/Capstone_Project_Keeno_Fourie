<template>
    <div>
         <!-- table for courses-->
         <div v-if="courses" class="container-fluid">
            <table class="container-fluid-2">
              <thead>
                <th>Watch ID</th>
                <th>Watch Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
                <th>Watch Url</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
  
  
                  <tbody id="product_list">
                    <tr v-for="course in courses" :key="course.id" class="list">
                      <td>{{ course.courseID }}</td>
                      <td>{{ course.courseName }}</td>
                      <td>{{ course.quantity }}</td>
                      <td>R {{ course.amount }}</td>
                      <td>{{ course.Category }}</td>
                      <td><img :src="course.courseUrl" class="card-img" :alt="course.courseName"></td>
  
  
                      <td id="course_edit_button" class="list">                      
                        <UpdateCourse/>
                          </td>
  
  
                          <td>
                            <button type="button" @click="deleteWatch(course.courseID)">Delete</button>
                          </td>
                          
                        </tr>
                      </tbody>
                      
                      
  
                    </table>
                  </div>
    </div>
</template>

<script>
import UpdateCourse from '@/components/UpdateCourse.vue';


export default {
  components: {
    UpdateCourse
},
    computed: {
      courses() {
          return this.$store.state.courses
      }
  },
  methods: {
    deleteCourse(courseID) {
          this.$store.dispatch("deleteCourse", courseID)
        }
    },
      mounted() {
          this.$store.dispatch('fetchCourses')
      }
};
</script>

<style scoped>

</style>