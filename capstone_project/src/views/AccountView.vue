<template>
    <div>
        <div id="account_page">

        </div>
        <img id="account_profile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile_image">
        <div id="profile_button">
            <a id="profile_link_button" href="/profile">Name Of User <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg></a>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#profile_button {
    position: relative;
    top: -8rem;
}
#profile_link_button {
    background-color: yellow;
    color: grey;
    padding: 1rem 3rem 1rem;
    text-decoration: none;
}
#profile_link_button:hover {
    background-color: grey;
    color: yellow;
}
#account_page {
    display: flex;
    justify-content: center;
    background-image: url("https://a-static.besthdwallpaper.com/beach-jogging-scenery-wallpaper-2732x768-87216_73.jpg");
    background-size: 100%;
    height: 50vh;
    background-repeat: no-repeat;
    border: 1px solid black;
}
#account_profile {
    position: relative;
    top: -10rem;
    background-color: white;
    border: 1px solid black;
    width: 20%;
    border-radius: 100%;
}
</style>