<template>
  <top-nav></top-nav>
  <router-view />

  <BottomNav></BottomNav>
</template>
<script setup>

import BottomNav from './components/Navbar/BottomNav.vue';
import TopNav from './components/Navbar/Top-Nav.vue';

</script>
<style lang="scss"></style>
