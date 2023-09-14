<template>
    <div>
           <div id="styling">
            <form @submit.prevent="login">
                <h1>Log In</h1>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="payload.emailAdd" required placeholder="Email Address...">
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password:</label>
                <input type="password" class="form-control" id="exampleInputPassword1" minlength="4" v-model="payload.userPassword" required placeholder="Password...">
                </div>
                <div id="buttons">
                    <button type="submit" class="btn">Login</button>
                    <router-link class="btn" aria-current="page" to="/register">Register</router-link>
                </div>
            </form>
           </div>
    </div>
</template>

<script>
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

    export default {
        data() {
            return {
                payload: {
                    emailAdd: "",
                    userPassword: ""
                }
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            login() {
                this.$store.dispatch("login", this.payload)
            }
        },
        beforeCreate() {
            this.$store.dispatch('fetchUser')
        },
        mounted() {
            console.log(cookies.get('RealUser'));
        },
    }
</script>

<style scoped>
h1 {
    color: black;
    padding-bottom: 1rem;
    font-weight: bold;
}
.btn {
    width: 6rem;
    background-color: yellow;
    color: grey;
    border-radius: 0rem;
    padding: 0.5rem;
    margin: 0.5rem;
}
.btn:hover {
    background-color: grey;
    color: yellow;
    border: none;
}
input {
    width: 60%;
    border: 2px solid black;
    border-radius: 0rem;
    height: 2.5rem;
}
label {
    width: 30%;
    text-align: right;
    padding: 0.5rem;
    color: black;
}
.mb-3 {
    display: flex;
}
#styling {
    height: 90vh;
    background-image: url("https://i.postimg.cc/YSWZJ7Qc/kghjvgchfigd.jpg");
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
form {
    background-color: white;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 3rem;
}




@media (width< 550px) {
    label {
      display: none;
    }
    .mb-3 {
      justify-content: center;
    }
    input {
      width: 100%;
    }
  }







</style>