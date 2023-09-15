<template>
    <div>
        <div v-if="course">
            <div v-for="item in course" :key="item.courseID" id="view_one_position">
                <img id="view_once_image" :src="item.courseImage" :alt="item.courseName">
                <div id="text_view_once">
                    <h2>R{{item.discountPrice}}</h2>
                    <h6>R{{item.coursePrice}}</h6>
                    <h1>{{item.courseName}}</h1>
                    <h4>{{item.coursePurpose}}</h4>   
                    <div id="line"></div>
                    <h5>{{item.courseDesc}}</h5>
                    <div id="button_cart_and_price">
                          <button @click.prevent="addToCart(item)" :to="{name:'addtocart', params:{courseID: item.courseID}}" id="button">+<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg> Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- spinner -->
      <div v-else class="row justify-content-center gap-3">
        <SpinnerComp/>
      </div>


    </div>
</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue';


export default {
  components: { SpinnerComp },
    data() {
  return {
    newCart: {
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
    addToCart(course) {
      this.$store.dispatch('addCart', course);
    },
},
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
#button {
    padding: 0.3rem;
    margin-top: 2rem;
    border: 1px solid black;
    background: none;
    text-decoration: none;
    color: black;
}
#button:hover {
    background-color: yellow;
}
#button_cart_and_price {
    display: flex;
    align-self: center;
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



@media (width< 870px) {
    #view_one_position {
        display: flex;
        flex-direction: column;
    }
    #view_once_image {
        height: 20rem;
        margin: 1rem;
    }
    #text_view_once {
        width: 80%;
    }
  }


  @media (width< 350px) {
    #view_once_image {
        height: 15rem;
        margin: 1rem;
    }
    #text_view_once {
        width: 90%;
    }
  }





</style> 