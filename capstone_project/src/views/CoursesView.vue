<template>
    <div>
        <!-- displaying courses -->
        <div id="courses_page">
            <h1 id="heading_displayed_courses">Try Out One Of Our Courses...</h1>
       </div>
           
<!-- search, sort, filter -->


<div id="search_sort_filter_buttons">
    <div id="sort">
      <!-- sort -->
        <div class="dropdown">
          <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sort</a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/price_low">Price (Lowest-Highest)</router-link></li>
            <li><router-link class="dropdown-item" to="/price_high">Price (Highest-Lowest)</router-link></li>
            <li><router-link class="dropdown-item" to="/alphabetical">Alphabetical</router-link></li>
          </ul>
        </div>
    </div>
  </div>

  <form action="/search" method="get">
    <input type="text" name="q" placeholder="Enter your search query">
    <input type="submit" value="Search">
  </form>









         <div id="courses_displaying">
             <div id="card" class="card text-bg-dark" v-for="courses in courses" :key="courses.courseID">
                 <img id="courses_cards_image" :src="courses.courseImage" class="card-img" :alt="courses.courseName">
                 <div class="card-img-overlay" id="course_text_display">
                    <div id="line"></div>
                     <h2 class="card-title"><b>{{ courses.courseName }}</b></h2>
                     <h5 id="course_purpose">{{ courses.coursePurpose }}</h5>
                     <router-link :to="{name:'singlecourse', params:{courseID: courses.courseID}}" id="view_more_button">Read More</router-link>
                 </div>
             </div>             
        </div>
        


    </div>
</template>

<script>
export default {
    computed: {
      courses() {
          return this.$store.state.courses
      }
  },
      mounted() {
          this.$store.dispatch('fetchCourses')
      }
};
</script>

<style scoped>
#heading_displayed_courses {
    color: black;
    padding: 2rem;
}
.card-title {
    color: yellow;
}
#course_price {
    color: red;
    text-decoration: line-through;
}
#line {
    border-top: 1px solid yellow;
    padding: 0.5rem;
}
#courses_displaying {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#courses_cards_image {
    border: none;
    border-radius: 0rem;
    filter: brightness(40%);
}
#course_text_display {
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: left;
    padding: 2rem;
}
#view_more_button {
    text-decoration: none;
    color: rgba(255, 255, 0, 0.607);
    font-weight: bold;
}
#view_more_button:hover {
    color: yellow;
}
#card {
    height: 20rem;
    width: 20rem;
    border-radius: 0rem;
    margin: 2rem;
    border: none;
}
</style>