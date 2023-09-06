<template>
    <div>
        <!-- appointment welcome -->
        <div id="appointment_page">
            <div id="appointment_welcome">
                <h1>Book An Appointment With Us...</h1>
                <h1>Only R150.00 For A Meet Up With One Of Our Trained Professional</h1>
            </div>
        </div>


        <!-- form for the adding appointment -->

        <AddAppointment/>
    </div>
</template>

<script>
import AddAppointment from '../components/AddAppointment.vue'
    export default {
  components: { AddAppointment },
        
    }
</script>

<style scoped>
h1 {
    padding: 1rem;
    text-shadow: 3px 3px 4px black;
}
#appointment_page {
    display: flex;
    justify-content: left;
    background-image: url("https://images7.alphacoders.com/130/1308025.jpg");
    background-attachment: fixed;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 4rem;
}
#appointment_welcome {
    color: white;
    width: 30%;
    text-align: right;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-self: center;
}
</style>