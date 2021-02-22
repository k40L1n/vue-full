<template>
  <section
    @click="close"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0 ">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
          <h1 class="text-xl mb-2 text-center">Login Portal</h1>
          <GoogleLogin />
          <p class="text-center">OR</p>
          <form class="p-2 my-2" @submit.prevent="submit">
            <div clas="my-4">
              <label>Email</label>
              <input
                ref="emailRef"
                v-model="email"
                type="text"
                class="rounded shadow p-2 w-full"
                placeholder="enter your email"
              />
            </div>
            <div clas="my-4">
              <label>Password</label>
              <input
                v-model="password"
                type="password"
                class="rounded shadow p-2 w-full"
                placeholder="enter your password"
              />
            </div>
            <div clas="my-4">
              <button
                type="submit"
                class="mt-10 w-full bg-green-800 text-white p-2"
              >
                <span v-if="!isLoading">Login</span>
                <span v-else>Please wait...</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "/utility/mixins/firebase";
import GoogleLogin from "../components/Login/GoogleLogin";

export default {
  components: { GoogleLogin },
  emits: ["close-login"],
  data() {
    return {
      email: "droidaarqam@gmail.com",
      password: "poppins",
      isLoading: false,
    };
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    close() {
      this.$emit("close-login");
    },
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.close();
        });
    },
  },
};
</script>
