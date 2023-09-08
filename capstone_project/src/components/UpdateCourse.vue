<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- body -->
        <div class="modal-body">
            <div class="mb">
                <input type="course_ID" class="form-control" id="exampleDropdown" v-model="editedCourse.courseID" placeholder="Course ID..." required oninvalid="this.setCustomValidity('Please Enter A Course ID')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Name" class="form-control" id="exampleDropdown" v-model="editedCourse.courseName" placeholder="Course Name..." required oninvalid="this.setCustomValidity('Please Enter A Course Name')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Target" class="form-control" id="exampleDropdown" v-model="editedCourse.coursePurpose" placeholder="Course Target..." required oninvalid="this.setCustomValidity('Please Enter A Course Target')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Description" class="form-control" id="exampleDropdown" v-model="editedCourse.courseDesc" placeholder="Course Description..." required oninvalid="this.setCustomValidity('Please Enter A Course Description')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Discount_Price" class="form-control" id="exampleDropdown" v-model="editedCourse.discountPrice" placeholder="Course Price..." required oninvalid="this.setCustomValidity('Please Enter A Course Discount Price')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Price" class="form-control" id="exampleDropdown" v-model="editedCourse.coursePrice" placeholder="Course Price..." required oninvalid="this.setCustomValidity('Please Enter A Course Price')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Image" class="form-control" id="exampleDropdown" v-model="editedCourse.courseImage" placeholder="Course Image..." required oninvalid="this.setCustomValidity('Please Enter A Course Image')" oninput="this.setCustomValidity('')">
              </div>
        </div>
        <!--  -->
        <div class="modal-footer">
          <button type="button" class="btn" @click.prevent="updatedCourse" data-bs-dismiss="modal">Edit</button>
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
      editedCourse: {
        courseID: "",
        courseName: "",
        coursePurpose: "",
        courseDesc: "",
        discountPrice: "",
        coursePrice: "",
        courseImage: "",
        }
      }
    },
      methods: {
        updatedCourse() {
        this.$store.dispatch("updatedCourse", this.editedCourse)
        this.$store.dispatch("fetchCourses")
      }
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