<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheAppHeader from './components/TheAppHeader.vue';
import TheAppContent from './components/TheAppContent.vue';
import Tiptap from './components/Tiptap.vue';
import TheNavBar from './components/TheNavBar.vue';
import Modal from './components/Modal.vue';


</script>

<template>
  <div class="app-container w-full flex flex-col h-full bg-app-container transition-all">
    <TheAppHeader />
    <TheAppContent />
    <Tiptap />
    <Modal />
    <!-- <TheNavBar /> -->
  </div>
  
</template>

<style>
</style>
