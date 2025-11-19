<template>
  <div class="bg-white border-b border-green-800/20 shadow py-3 fixed w-full">
    <div class="container flex justify-between mx-auto">
      <NuxtLink to="/">
        <div>Pelatihan BKD</div>
      </NuxtLink>
      <div class="flex">
        <NuxtLink to="/news">
          <div
            class="text-bkd-dark font-medium hover:bg-green-800/10 px-3 h-8 flex items-center rounded-lg transition duration-75"
          >
            News
          </div>
        </NuxtLink>
        <NuxtLink to="/dashboard">
          <div
            class="text-bkd-dark font-medium hover:bg-green-800/10 px-3 h-8 flex items-center rounded-lg transition duration-75"
          >
            Dashboard
          </div>
        </NuxtLink>
        <div
          class="text-bkd-dark border border-green-800/30 font-medium hover:bg-green-800/10 px-3 h-8 flex items-center rounded-lg transition duration-75"
        >
          Login
        </div>
      </div>
    </div>
  </div>
</template>
