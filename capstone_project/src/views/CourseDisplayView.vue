<template>
    <div v-if="course">
        <div class="card text-bg-dark" v-for="course in course" :key="course.courseID">
            <img id="course_cards_image" :src="course.courseImage" class="card-img" :alt="course.courseName">
            <div class="card-img-overlay" id="course_text_display">
                <h2 class="card-title"><b>{{ course.courseName }}</b></h2>
                <h5 id="course_purpose">{{ course.coursePurpose }}</h5>
                <h5 id="course_purpose">{{ course.courseDesc }}</h5>
                <h4 id="course_price">R{{ course.coursePrice }}</h4>
                <h4 id="course_discount">R{{ course.discountPrice }}</h4>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    props: ["courseID"],
    created() {
            this.$store.dispatch("fetchCourse",this.courseID)
    },
    computed: {
        course() {
              return this.$store.state.course
            }
        }
    }
</script>
<style  scoped>

</style> 