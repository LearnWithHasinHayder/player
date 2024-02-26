<script></script>
<template>
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
</template>
