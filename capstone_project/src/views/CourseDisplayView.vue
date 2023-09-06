<template>
    <div>
        <div v-for="course in course" :key="course.courseID" id="view_one_position">
            <img id="view_once_image" :src="course.courseImage" :alt="course.courseName">
            <div id="text_view_once">
                <h1>{{course.courseName}}</h1>
                <h4>{{course.coursePurpose}}</h4>   
                <div id="line"></div>
                <h5>{{course.courseDesc}}</h5>
                <router-link to="/cart" id="price">
                    <h6>R{{course.coursePrice}}</h6>
                    <h4>R{{course.discountPrice}}</h4>
                </router-link>
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
#price {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    margin: 2rem;
    text-decoration: none;
    color: black;
    padding: 0.3rem;
    border: none;
    background-color: yellow;
    width: 30%;
}
#price:hover {
    background-color: grey;
}
h5 {
    color: grey;
}
h1 {
    color: yellow;
}
h6 {
    color: red;
    text-decoration: line-through;
}
#line {
    border-top: 1px solid black;
    padding: 1rem;
}
#text_view_once {
    color: black;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 2rem;
}
#view_once_image {
    height: 35rem;
    margin: 2rem;
}
#view_one_position {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style> 