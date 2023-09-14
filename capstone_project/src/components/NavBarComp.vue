<template>
    <div>
        <nav id="navbar_styling" class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul class="navbar-nav" id="all_navbar_links">
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/about">About</router-link>
                    </li>
                    <li class="nav-item" v-show="isAdmin || isUser">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/appointments">Appointments</router-link>
                    </li>
                    <li class="nav-item">
                        <img id="navbar_image" src="https://i.postimg.cc/8c3DKg2D/Daniel-Gallego-1-removebg-preview.png" alt="Logo">
                    </li>
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/courses">Courses</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/contact_us">Contact</router-link>
                    </li>
                    <li class="nav-item" v-show="isAdmin">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/admin">Admin</router-link>
                    </li>
                    <li class="nav-item" v-show="isAdmin || isUser">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/account">
                            ok
                        </router-link>
                    </li>
                    <li class="nav-item" v-show="isAdmin || isUser">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </router-link>
                    </li>
                    <li class="nav-item" v-show="logIn">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" @click="logOut" to="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                              </svg>
                        </router-link>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default {
    methods: {
        logOut() {
            this.$store.dispatch("logOut")
        }
    },
    computed: {
        user() {
            return this.$store.state.user ||
            cookies.get("RealUser")
        },
        userr() {
                return cookies.get("RealUser").result || this.$store.state.user
            },
        result() {
            return this.user?.result;
        },
        isAdmin() {
            return this.result?.userRole?.toLowerCase() === "admin";
        },
        isUser() {
            return this.result?.userRole?.toLowerCase() === "user";
        },
        logIn() {
            return this.result?.userRole?.toLowerCase() === "admin" || this.result?.userRole?.toLowerCase() === "user";
        }
    }
}
</script>


<style scoped>
.navbar-collapse {
    justify-content: center;
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
}
#all_navbar_links[data-v-f1507c62] {
    width: 100%;
    justify-content: space-evenly;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid yellow;
    width: 80%;
    margin: auto;
}
#account_profile {
    height: 2rem;
}
#navbar_image {
    height: 5rem;
}
#navbar_styling {
    background-color: #2A2A2A;
}
#navbar_links {
    color: white;
}
#all_navbar_links {
    width: 100%;
    justify-content: space-evenly;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid yellow;
    width: 80%;
}
nav a.router-link-exact-active {
    font-weight: bold;
}


@media (width< 990px) {
    img {
        display: none;
    }
}


</style>