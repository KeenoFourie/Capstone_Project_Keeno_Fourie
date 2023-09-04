<template>
    <div>
        <nav id="navbar_styling" class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul class="nav" id="all_navbar_links">
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/about">About Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/appointments">Appointments</router-link>
                    </li>
                    <li class="nav-item">
                        <img id="navbar_image" src="https://i.postimg.cc/8c3DKg2D/Daniel-Gallego-1-removebg-preview.png" alt="Logo">
                    </li>
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/courses">Courses</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/contact_us">Contact Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/admin">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/account">Account</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="navbar_links" class="nav-link" aria-current="page" to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg></router-link>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#navbar_image {
    height: 6rem;
}
#navbar_styling {
    background-color: #2A2A2A;
}
#navbar_links {
    color: white;
}
#all_navbar_links {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 2px solid yellow;
    width: 80%;
}
#navbarSupportedContent {
    display: flex;
    justify-content: center;
}
nav a.router-link-exact-active {
    font-weight: bold;
}
</style>