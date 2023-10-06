<template>
  <div class="contactsContainer">
    <h1>
      SCRIVIMI ALLA MAIL<br />
      <a href="mailto:cri.ballerini@gmail.com">cri.ballerini@gmail.com</a>
    </h1>
    <h5>OPPURE</h5>
    <div class="card">
      <h2 class="title">COMPILA IL MODULO</h2>
      <form class="form" @submit.prevent="sendEmail" ref="form">
        <label class="label" for="name"><strong>NOME</strong></label>
        <input
          id="name"
          class="styleInput"
          name="user_name"
          v-model="user_name"
          type="text"
          required
          autocomplete="on"
        />
        <label class="label" for="email"><strong>EMAIL</strong></label>
        <input
          id="email"
          class="styleInput"
          name="user_email"
          v-model="user_email"
          type="email"
          required
          autocomplete="on"
        />
        <label class="label" for="message"><strong>MESSAGGIO</strong></label>
        <textarea
          id="message"
          class="styleInput inputMessage"
          name="user_message"
          v-model="user_message"
          style="height: 80px"
          required
        ></textarea>
        <button class="btn" type="submit"><strong>INVIA</strong></button>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      user_name: "",
      user_email: "",
      user_message: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_2fzn99o",
          "template_u6lgcol",
          this.$refs.form,
          "54Be7ZE2Rg3dkpdnL"
        )
        .then(
          (result) => {
            alert("Messaggio inviato", result.text);
            this.user_name = "";
            this.user_email = "";
            this.user_message = "";
          },
          (error) => {
            alert("Errore, messaggio non inviato. Riprova", error.text);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.contactsContainer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0 25%;
  padding-top: 40px;
  text-align: center;
}
h1 {
  margin: 20px 0;
}
a {
  width: 100%;
}
a:link {
  text-decoration: none;
  color: #023535;
}
a:visited {
  text-decoration: none;
  color: #023535;
}
a:hover {
  opacity: 0.7;
}
a:active {
  color: #023535;
}
h5 {
  margin: 20px 0;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  box-sizing: border-box;
  height: 425px;
  width: 300px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 2px #6c786b;
  margin: 20px 0;
}
.title {
  margin-top: 10px;
  color: #023535;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.label {
  margin-top: 10px;
  color: #023535;
}
.styleInput {
  height: 40px;
  width: 250px;
  border: 2px solid #66796b;
  border-radius: 5px;
  color: #023535;
  text-align: center;
}

.styleInput:focus {
  border: 3px solid #66796b5b;
  outline: none;
}
.inputMessage {
  resize: none;
  padding-top: 10px;
}
.btn {
  font-family: nenue;
  margin-top: 20px;
  width: 90px;
  border: none;
  background-color: transparent;
  color: #023535;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 5px;
}
.btn:hover {
  background-color: #02353519;
  cursor: pointer;
}
</style>
