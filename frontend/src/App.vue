<template>
  <button
    type="button"
    v-on:click="mode = 'create'"
  >
    Cadastrar Usuário
  </button>
  <div v-if="mode != ''">
    <UserForm v-on:change-mode="getAllUsers" mode="mode" />
  </div>
  <div v-if="users.length > 0">
    <div v-for="user in users" :key="user.id">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
      <button type="button" v-on:click="deleteUser(user.id)">Remover</button>
      <button type="button" v-on:click="mode = 'edit'">Editar</button>
    </div>
  </div>
  <div v-else>
    <p>Nenhum Usuário Cadastrado</p>
  </div>
</template>

<script>
import axios from "axios";
import UserForm from './components/UserForm.vue';
import './styles/reset.css';

export default {
  name: 'App',
  components: {
    UserForm
  },
  created() {
    this.getAllUsers()
  },
  data() {
    return {
      mode: '',
      users: []
    }
  },
  methods: {
    getAllUsers() {
      axios
      .get('http://localhost:3001/users')
      .then((res) => {
        this.users = res.data;
        this.mode = '';
      })
      .catch((err) => {
        console.log(err.message);
      });
    },
    deleteUser(id) {
      axios
      .delete(`http://localhost:3001/users/${id}`)
      .then(() => {
        this.getAllUsers();
        this.mode = '';
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
  }
}
</script>

<style></style>
