<template>
  <div class="shadow max-w-sm rounded-md ml-5">
    <h1 class="text-3xl">Heroes - {{ heroesCount }} </h1>
    <ul class="">
      <li class="flex" v-for="(hero, key) in heroes" :key="key">
        {{ hero.name }}
        <button class="bg-black text-white px-2 py-1" @click="remove(key)">
          x
        </button>
      </li>
    </ul>
    <form @submit.prevent="addHero">
      <input
        type="text"
        class="border rounded-md"
        v-model="hero"
        ref="newHeroRef"
      />
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
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const hero = ref("");
    const heroes = ref([
      { name: "Earth Spirit" },
      { name: "Earth Shaker" },
      { name: "Witch Doctor" },
      { name: "KOTL" },
    ]);
    onMounted(() => {
      newHeroRef.value.focus();
    });

    const heroesCount = computed({
      get: () => heroes.value.length
    });
    
    function remove(index) {
      heroes.value = heroes.value.filter((hero, i) => i !== index);
    }

    function addHero() {
      if (hero.value !== "") {
        heroes.value.push({ name: hero.value });
        hero.value = "";
      }
    }

    return { heroes, hero, remove, addHero, newHeroRef ,heroesCount};
  },
};
</script>
