<template>
  <nav class="w-full text-white bg-blue-800 px-4 py-2">
    <router-link
      v-for="item in list"
      :key="item.to"
      class="mx-2"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button class="mx-2" @click="$emit('open-login-modal')">Login</button>
    <button class="mx-2" @click="logout">Logout</button>
  </nav>
</template>

<script>
import firebase from "/utility/mixins/firebase";

export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Heroes", to: "/heroes" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
      ],
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
  },
};
</script>
