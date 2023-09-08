<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal57">+ Course</button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal57" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- body -->
        <div class="modal-body">
            <div class="mb">
                <input type="course_Name" class="form-control" id="exampleDropdown" v-model="newCourse.courseName" placeholder="Course Name..." required oninvalid="this.setCustomValidity('Please Enter A Course Name')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Target" class="form-control" id="exampleDropdown" v-model="newCourse.coursePurpose" placeholder="Course Target..." required oninvalid="this.setCustomValidity('Please Enter A Course Target')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Description" class="form-control" id="exampleDropdown" v-model="newCourse.courseDesc" placeholder="Course Description..." required oninvalid="this.setCustomValidity('Please Enter A Course Description')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Discount_Price" class="form-control" id="exampleDropdown" v-model="newCourse.discountPrice" placeholder="Course Discount Price..." required oninvalid="this.setCustomValidity('Please Enter A Course Discount Price')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Price" class="form-control" id="exampleDropdown" v-model="newCourse.coursePrice" placeholder="Course Price..." required oninvalid="this.setCustomValidity('Please Enter A Course Price')" oninput="this.setCustomValidity('')">
              </div>
            <div class="mb">
                <input type="course_Image" class="form-control" id="exampleDropdown" v-model="newCourse.courseImage" placeholder="Course Image..." required oninvalid="this.setCustomValidity('Please Enter A Course Image')" oninput="this.setCustomValidity('')">
              </div>
        </div>
        <!--  -->
        <div class="modal-footer">
          <button type="button" class="btn" @click.prevent="addCourse" data-bs-dismiss="modal">Add</button>
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
    newCourse: {
        courseName: '',
        coursePurpose: '',
        courseDesc: '',
        discountPrice: '',
        coursePrice:'',
        courseImage:''
    }
  }
},
methods: {
  addCourse(){
    this.$store.dispatch('addCourse', this.newCourse);


    // clears all the inputs
    this.newCourse = {
        courseName: '',
        coursePurpose: '',
        courseDesc: '',
        discountPrice: '',
        coursePrice:'',
        courseImage:''
    };
    setTimeout(this.fetchCourses, 1000);
    },
    fetchCourses() {
        this.$store.dispatch("fetchCourses")
    },
}
  }
</script>

<style scoped>
button {
    position: absolute;
    right: 4rem;
    top: 10rem;
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
</style>