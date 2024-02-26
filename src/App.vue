<script setup>
import {ref} from 'vue'
import Sidebar from './components/Sidebar.vue'
import Navigation from './components/Navigation.vue'
import Player from './components/Player.vue'
import engine from './data/engine.js'
engine.initialize()
</script>

<template>
  <div class="player">
    <Navigation/>
    <div class="main flex sm:flex-col sm:flex-col-reverse lg:flex-row">
      <Sidebar/>
      <Player/>
    </div>
  </div>
</template>

<style scoped></style>
