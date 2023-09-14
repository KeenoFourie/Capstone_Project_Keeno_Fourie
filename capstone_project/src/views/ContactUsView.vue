<template>
    <div>
        <div id="contact_page">
            <div id="contact_welcome">
                <h1>Get In Touch With Us...</h1>
            </div>
        </div>
        <div id="contact_form">
            <form action="https://formspree.io/f/xnqkvzny" method="POST">
                <div id="form">
                    <div>
                        <div class="mb-3">
                            <input type="name" class="form-control" id="exampleInputName" placeholder="Name" name="Name" required>
                          </div>
                          <div class="mb-3">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" name="Email" required>
                          </div>
                          <div class="mb-3">
                            <input type="phone" class="form-control" id="exampleInputPhone" placeholder="Phone" name="Phone" required>
                          </div>
                    </div>
                    <div>
                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Message" name="Message" required></textarea>
                          </div>
                    </div>
                </div>
                <button type="submit" class="btn">SEND</button>
              </form>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#contact_form {
    position: relative;
    top: -10rem;
    left: 30%;
    background-color: white;
    border: 1px solid black;
    width: 40%;
    padding: 2rem;
}
.btn {
    background-color: yellow;
    color: grey;
    border-radius: 0rem;
    padding-inline: 2rem;
}
.btn:hover {
    background-color: grey;
    color: yellow;
}
input {
    width: 100%;
    border: none;
    border-bottom: 1px solid grey;
    border-radius: 0rem;
}
.mb-3 {
    display: flex;
    margin: 2rem;
}
#form {
    width: 100%;
    display: flex;
    justify-content: center;
}
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    justify-self: center;
    align-content: center;
    align-items: center;
}
h1 {
    padding: 0.5rem;
    font-size: 4rem;
    text-shadow: 3px 3px 4px black;
}
#contact_page {
    display: flex;
    justify-content: center;
    background-image: url("https://images5.alphacoders.com/107/1077900.jpg");
    background-attachment: fixed;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 4rem;
    border: 1px solid black;
}
#contact_welcome {
    color: white;
    width: 50%;
    text-align: center;
    height: 40vh;
    display: flex;
    flex-direction: column;
}




@media (width< 1000px) {
    #contact_page {
        display: none;
    }
    #contact_form {
        display: contents;        
    }
    form {
        height: 80vh;
        background-image: url("https://images5.alphacoders.com/107/1077900.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }
  }


  @media (width< 700px) {
    #form {
        display: flex;
        flex-direction: column;
    }
    form {
        padding: 2rem;
    }
  }






</style>