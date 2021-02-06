<template>
  <div class="flex flex-wrap w-full">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div
          v-if="currentSlide === index"
          :class="color"
          style="height:350px;"
        ></div>
      </transition>
    </div>
  </div>
  <div class="w-full relative" style="height:340px">
    <div class="absolute bottom-0 flex justify-center">
      <div v-for="(slider, index) in sliders" :key="slider" 
      @click="makeActive(index)"
      :class="currentSlide === index ? 'bg-gray-200' : 'bg-gray-700'"
      class="mx-2 w-4 h-4 rounded-full cursor-pointer"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      sliders: ["bg-blue-600", "bg-yellow-600", "bg-red-600"],
      interval: "",
      isTitleShowing: true,
    };
  },
  methods: {
    makeActive(index){
      this.currentSlide = index;
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearTimeout(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 500ms ease-in-out;
}

.fade-enter-from {
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
