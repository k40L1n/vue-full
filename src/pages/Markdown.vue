<template>
  <div class="flex flex-wrap w-full p-2">
    <h1 class="w-full text-center text-3xl my-2">Markdown App</h1>
    <section class="flex m-auto w-full h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import debounce from "/utility/mixins/debounce";

export default {
  mixins: [debounce],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
};
</script>
