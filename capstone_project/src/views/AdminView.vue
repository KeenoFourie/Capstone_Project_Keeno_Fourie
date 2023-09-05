<template>
    <div>
         <!-- table for courses-->
         <div v-if="courses" class="container-fluid">
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