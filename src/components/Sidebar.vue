<script setup>
import course from "../data/data"
import engine from "../data/engine"

function setCurrentEpisode(episode) { 
  engine.player.currentEpisode = episode
}
</script>
<template>
  <div class="sidebar lg:overflow-auto sm:w-full lg:w-[var(--sidebar-width)] bg-gray-800 lg:h-[calc(100vh-var(--nav-height))]">
    <div class="">
      <div class="chapter py-4 px-2" v-for="(chapter, chindex) in course.chapters" :key="chapter.id" >
        <h2 class="text-xl text-gray-300 mb-2">{{ chapter.title }}</h2>
        <ul class="episodes">
          <li class="flex items-center cursor-pointer justify-between group" v-for="(episode, epindex) in chapter.episodes" :key="episode.uuid">
            <div class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="8"></circle>
                <path d="m8 13 1.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"></path>
              </svg>
              <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="8"></circle>
              </svg>
              <span @click="setCurrentEpisode(chapter.episodes[epindex])" class="text-gray-400 text-lg group-hover:text-gray-300">{{ episode.title }}</span>
            </div>
            <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded">
              {{ episode.duration }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
