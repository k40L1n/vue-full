<template>
  <nav class="w-full text-white bg-blue-800 px-4 py-2">
    <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to">{{ item.title }}</router-link>
  </nav>
</template>

<script>
export default {
  data(){
    return {
      list: [
        {title: 'Heroes', to: '/heroes'},
        {title: 'Calendar', to: '/calendar'},
        {title: 'Markdown', to: '/markdown'}
      ]
    }
  }
};
</script>

<style></style>
