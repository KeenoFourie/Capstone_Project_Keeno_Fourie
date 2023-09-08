<template>
    <div>
        <div v-for="course in course" :key="course.courseID" id="view_one_position">
            <img id="view_once_image" :src="course.courseImage" :alt="course.courseName">
            <div id="text_view_once">
                <h2>R{{course.discountPrice}}</h2>
                <h6>R{{course.coursePrice}}</h6>
                <h1>{{course.courseName}}</h1>
                <h4>{{course.coursePurpose}}</h4>   
                <div id="line"></div>
                <h5>{{course.courseDesc}}</h5>
                <div id="button_cart_and_price">
                    <button>+<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg> Add To Cart</button>
                </div>
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
svg {
    margin-right: 0.5rem;
}
h2 {
    font-weight: bold;
}
button {
    padding: 0.3rem;
    width: 100%;
    margin-top: 2rem;
    border: 1px solid black;
    background: none;
}
button:hover {
    background-color: yellow;
}
#button_cart_and_price {
    display: flex;
}
#price {
    display: flex;
    align-self: left;
    align-items: end;
    margin-bottom: 2rem;
    margin-top: 2rem;
    text-decoration: none;
    color: black;
    width: 30%;
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