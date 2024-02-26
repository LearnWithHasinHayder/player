<script setup></script>

<template>
  <div class="player">
    <div class="navigation bg-gray-900 h-[var(--nav-height)] flex justify-between items-center sticky top-0 z-10">
      <div class="px-2 text-xl text-white w-[var(--sidebar-width)] flex justify-between">
        <span class="text-lg text-gray-400">Mastering Alpine.js</span>
      </div>
      <div class="pr-5 text-base text-white w-[calc(100%-var(--sidebar-width))] flex justify justify-between items-center">
        <div class="sm:invisible lg:visible">
          <p class="text-base pl-5 text-gray-300">Completed 16%</p>
        </div>
        <ul class="flex justify-end space-x-6">
          <li>Settings</li>
          <li>Home</li>
          <li>Account</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
    <div class="main flex sm:flex-col sm:flex-col-reverse lg:flex-row">
      <div class="sidebar lg:overflow-auto sm:w-full lg:w-[var(--sidebar-width)] bg-gray-800 lg:h-[calc(100vh-var(--nav-height))]">
        <div class="">
          <div class="chapter py-4 px-2">
            <h2 class="text-xl text-gray-300 mb-2">Ch 1: Introduction</h2>
            <ul class="episodes">
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                    <path d="m8 13 1.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"></path>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What is Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 2:16 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Benefits of using Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What will be taught in this course</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 15:11 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Learning goal</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 2:09 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Prerequisite</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 1:56 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Support</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 2:33 </span>
              </li>
            </ul>
          </div>
          <div class="chapter py-4 px-2">
            <h2 class="text-xl text-gray-300 mb-2">Ch 2: Getting Started with Alpine.js</h2>
            <ul class="episodes">
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                    <path d="m8 13 1.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"></path>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What is Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 2:16 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Benefits of using Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What will be taught in this course</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
            </ul>
          </div>
          <div class="chapter py-4 px-2">
            <h2 class="text-xl text-gray-300 mb-2">Ch 3: Development Environment & Tools</h2>
            <ul class="episodes">
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                    <path d="m8 13 1.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"></path>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What is Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 2:16 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Benefits of using Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What will be taught in this course</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Learning goal</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Prerequisite</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Support</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
            </ul>
          </div>
          <div class="chapter py-4 px-2">
            <h2 class="text-xl text-gray-300 mb-2">Ch 4: Development Environment & Tools</h2>
            <ul class="episodes">
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                    <path d="m8 13 1.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"></path>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What is Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 2:16 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Benefits of using Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What will be taught in this course</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Learning goal</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Prerequisite</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Support</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
            </ul>
          </div>
          <div class="chapter py-4 px-2">
            <h2 class="text-xl text-gray-300 mb-2">Ch 5: Development Environment & Tools</h2>
            <ul class="episodes">
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                    <path d="m8 13 1.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"></path>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What is Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 2:16 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Benefits of using Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What will be taught in this course</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Learning goal</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Prerequisite</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Support</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
            </ul>
          </div>
          <div class="chapter py-4 px-2">
            <h2 class="text-xl text-gray-300 mb-2">Ch 6: Development Environment & Tools</h2>
            <ul class="episodes">
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                    <path d="m8 13 1.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"></path>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What is Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 2:16 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Benefits of using Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What will be taught in this course</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Learning goal</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Prerequisite</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Support</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
            </ul>
          </div>
          <div class="chapter py-4 px-2">
            <h2 class="text-xl text-gray-300 mb-2">Ch 7: Development Environment & Tools</h2>
            <ul class="episodes">
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                    <path d="m8 13 1.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"></path>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What is Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 2:16 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Benefits of using Alpine.js</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">What will be taught in this course</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Learning goal</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Prerequisite</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
              <li class="flex items-center cursor-pointer justify-between group">
                <div class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-transparent stroke-zinc-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <svg class="h-6 w-6 flex-none fill-zinc-500 stroke-zinc-500 stroke-2 mr-1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                  <span class="text-gray-400 text-lg group-hover:text-gray-300">Support</span>
                </div>
                <span class="text-gray-400 group-hover:text-gray-200 text-sm bg-gray-600 text-center w-12 group-hover:bg-gray-500 rounded"> 5:23 </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="course-player overflow-auto sm:w-full lg:w-[calc(100%-var(--sidebar-width))] lg:h-[calc(100vh-var(--nav-height))] p-5">
        <div class=" ">
          <div class="episode-info mb-4 flex justify-between items-center">
            <h1 class="text-xl">Getting Started with Alpine.js</h1>
            <div class="episode-nav">
              <div class="sm:hidden xl:inline-flex">
                <button class="bg-sky-500 hover:bg-sky-600 text-white mr-2 font-medium py-2 px-6 rounded">Download Resource</button>

                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 w-30 font-medium py-2 px-6 rounded-l">Completed</button>
                <div class="w-[1px] bg-gray-400"></div>
                <button class="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 w-32 font-medium py-22 px-6 rounded-r">Bookmark</button>
                <!-- <button class="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 w-34 font-medium py-22 px-6 rounded-r">
                                    Unbookmark
                                </button> -->

                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 w-28 font-medium py-2 px-6 rounded-l">Previous</button>
                <div class="w-[1px] bg-gray-400"></div>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 w-28 font-medium py-22 px-6 rounded-r">Next</button>
              </div>
              <div class="sm:inline-flex xl:hidden">
                <button class="bg-sky-500 hover:bg-sky-600 text-white mr-2 font-medium py-2 px-6 rounded">Resource</button>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 w-16 font-medium py-2 px-2 rounded-l">Prev</button>
                <div class="w-[1px] bg-gray-400"></div>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 w-16 font-medium py-22 px-2 rounded-r">Next</button>
              </div>
            </div>
          </div>
          <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/Eu3yWN1Sqro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
