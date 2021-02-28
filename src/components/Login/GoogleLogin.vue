<template>
  <section class="text-center">
    <button
      @click="loginWithGoogle"
      class="border bg-blue-600 text-white p-2 rounded-md"
    >
      Login With Google
    </button>
  </section>
</template>

<script>
import firebase from "/utility/mixins/firebase";

export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("close-login-from-google");
        });
    },
  },
};
</script>
