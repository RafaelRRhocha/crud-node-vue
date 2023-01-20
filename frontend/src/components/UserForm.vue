<template>
  <div>
    <input type="text" placeholder="digite o seu nome" v-model="name" />
    <input type="text" placeholder="digite o seu email" v-model="email" />
    <button type="button" v-on:click="postUser">Salvar Usuário</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'UserForm',
  data() {
    return {
      name: '',
      email: '',
      newName: '',
      newEmail: ''
    }
  },
  methods: {
    postUser() {
      if(this.email.trim() === '') {
        alert('Por favor inserir um email válido');
      } else {
        axios
        .post('http://localhost:3001/users', {
            name: this.name,
            email: this.email,
          })
        .then(() => {
          this.name = '';
          this.email = '';
          this.$emit('change-mode', {
            mode: ''
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
      }
    },
    editUser(id) {
      axios
      .put(`http://localhost:3001/users/${id}`, {
          name: this.newName,
          email: this.newEmail
        })
      .then(() => {
        this.name = '';
          this.email = '';
          this.$emit('change-mode', {
            mode: ''
          });
      })
      .catch((err) => {
          console.log(err.message);
        });
    }
  }
}
</script>

<style>
  
</style>