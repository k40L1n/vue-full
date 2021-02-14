<template>
  <div class="shadow max-w-sm rounded-md ml-5">
    <h1 class="text-3xl">Heroes</h1>
    <ul class="">
      <li class="flex" v-for="(hero, key) in heroes" :key="key">
        {{ hero.name }}
        <button class="bg-black text-white px-2 py-1" @click="remove(key)">
          x
        </button>
      </li>
    </ul>
    <form @submit.prevent="addHero">
      <input type="text" class="border rounded-md" v-model="hero" ref="newHeroRef" />
      <button
        class="bg-indigo-600 hover:bg-indigo-600 px-3 py-1 rounded-md text-white"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: "",
      heroes: [
        { name: "Earth Spirit" },
        { name: "Earth Shaker" },
        { name: "Witch Doctor" },
        { name: "KOTL" },
      ],
    };
  },
  mounted(){
    this.$refs.newHeroRef.focus();
  },
  methods: {
    addHero() {
      if (this.hero !== "") {
        this.heroes.push({ name: this.hero });
        this.hero = "";
      }
    },
    remove(index) {
      this.heroes = this.heroes.filter((hero, i) => i !== index);
    },
  },
};
</script>

<style></style>
