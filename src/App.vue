<template>
  <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>

  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "/utility/mixins/firebase";

export default {
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: "",
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoginOpen = false;
        this.isLoggedIn = false;
        this.authUser = [];
      }
    });
  },
  components: {
    AppHeader,
    LoginModal,
  },
};
</script>
