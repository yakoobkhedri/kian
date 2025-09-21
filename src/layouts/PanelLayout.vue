<!-- src/layouts/PanelLayout.vue -->


<template>
  <div class="panel-layout">
    <PanelHeader />
    <div class="flex items-start">
      <Sidebar />
      <main class="flex-grow sm:p-5 p-3">
        <router-view />
      </main>
    </div>
  </div>
</template>


<script setup>
import PanelHeader from '../components/PanelHeader.vue';
import Sidebar from '../components/Sidebar.vue';

</script>
