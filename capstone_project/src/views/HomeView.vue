<template>
  <div>
    <!-- landing page welcome -->
    <div id="landing_page_welcome">
      <div id="get_involved">
        <h1 id="get">Get</h1>
        <h3 id="involved">Involved</h3>
        <h3 id="with">With</h3>
        <h3 id="us">Us ...</h3>
      </div>
      <div id="structure_welcome_text">
        <p id="text_welcome_text">Make your first booking today and stand a chance to win a free course with us. Become loyal customer today and let us help you to achieve your goals.</p>
      </div>
      <div id="join_button_div">
        <a href="/register" id="join_button">Join Now</a>
      </div>
      <div id="arrow_down">
        <a href="#heading_courses_page" id="down_arrow"><i class="fa-solid fa-angles-down" style="color: #ffffff;"></i></a>
      </div>
    </div>


    <!-- courses -->
    <div id="courses_page">
      <h2 id="heading_courses_page">Some Of Our Courses ...</h2>

      <!-- cards -->
      <div id="cards_positioning">
        <div class="card" v-for="courses in courses" :key="courses.courseID" id="courses_card">
          <img id="card_image" :src="courses.courseImage" :alt="courses.courseName">
          <div class="card-img-overlay">
          <div id="empty_div"></div>
          <h1>{{courses.courseName}}</h1>
          <h4>{{courses.coursePurpose}}</h4>   
        </div>
      </div>
    </div>
    </div>

    <!-- frequently asked questions -->
    <div id="asked_questions">
      <h2 id="heading_asked_questions">Frequently Asked Questions ...</h2>
      <div id="the_questions">
        
        <!-- question 1 -->
        <div class="button_q_and_a">
          <router-link class="questions" aria-current="page" to="/question_1">How to make a booking?</router-link>
        </div>

        <!-- question 2 -->
        <div  class="button_q_and_a">
          <router-link class="questions" aria-current="page" to="/question_2">Do you offer nutrition guidance or meal planning as part of your services?</router-link>
        </div>
        
        <!-- question 3 -->
        <div class="button_q_and_a">
          <router-link class="questions" aria-current="page" to="/question_3">Where do you conduct training sessions? Do you offer both in-person and online training?</router-link>
        </div>
        
        <!-- question 4 -->
        <div class="button_q_and_a">
          <router-link class="questions" aria-current="page" to="/question_4">Can you customize a fitness plan for my specific needs and goals?</router-link>
        </div>
        
        <!-- question 5 -->
        <div class="button_q_and_a">
          <router-link class="questions" aria-current="page" to="/question_5">What are your qualifications and certifications as a personal trainer?</router-link>
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
.card {
  margin: 1rem;
}
#card_image {
  filter: brightness(20%);
}
#get {
  font-size: 5rem;
}
#involved {
  font-size: 3rem;
}
#with {
  font-size: 3rem;
}
#us {
  font-size: 3rem;
}
.questions {
  text-decoration: none;
  color: #2A2A2A;
}
.button_q_and_a {
  background-color: #787878;
  border-radius: 0rem;
  padding: 0.5rem;
  padding-inline: 3rem;
  border: none;
  width: 100%;
  text-align: left;
}
.questions:hover {
  color: black;
}
.btn-close {
  padding: 1rem;
}
#empty_div {
  border: 1px solid yellow;
  margin: 0.2rem;
}
.card-img-overlay {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: end;
  color: white;
}
#cards_positioning {
  display: flex;
  justify-content: center;
}
#courses_card {
  height: 18rem;
  width: 18rem;
}
#heading_courses_page {
  color: black;
  padding-top: 3rem;
  padding-bottom: 1rem;
}
#heading_asked_questions {
  color: black;
  padding-top: 3rem;
  padding-bottom: 1rem;
}
#structure_welcome_text {
  width: 100%;
  display: flex;
  justify-content: center;
}
#text_welcome_text {
  width: 30%;
}
#arrow_down {
  margin-bottom: 0.8rem;
}
#join_button_div {
  margin: 3rem;
}
#landing_page_welcome {
  background-image: url("https://wallpaperaccess.com/full/804850.jpg");
  background-attachment: fixed;
  background-size: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  text-shadow: 3px 3px 4px black;
}
#get_involved {
  margin: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
#join_button {
  text-decoration: none;
  color: #464646;
  border: 2px solid yellow;
  background-color: yellow;
  padding: 0.8rem;
  text-shadow: none;
}
</style>