<!-- components/Swiper/Main.vue -->
<template>
  <div class="swiper-container">
    <swiper
      :modules="modules"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :loop="loop"
      :autoplay="autoplay"
      :pagination="pagination"
      :navigation="navigation"
      :breakpoints="breakpoints"
    >
      <slot></slot>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const props = defineProps({
  slidesPerView: {
    type: Number,
    default: 1,
  },
  spaceBetween: {
    type: Number,
    default: 10
  },
  pagination: {
    type: [Object, Boolean],
    default: () => ({ clickable: true })
  },
  navigation: {
    type: Boolean,
    default: false
  },
  loop: {
    type: Boolean,
    default: false
  },
  autoplay: {
    type: [Object, Boolean],
    default: false
  },
  breakpoints: {
    type: Object,
    default: () => ({})
  }
})

const modules = [Autoplay, Pagination, Navigation]
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>