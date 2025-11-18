<template>
  <div class="bg-white border-b py-3 fixed w-full">
    <div class="container flex justify-between mx-auto">
      <NuxtLink to="/">
        <div>Logo</div>
      </NuxtLink>
      <div class="flex space-x-5">
        <NuxtLink to="/news">
          <div>News</div>
        </NuxtLink>
        <NuxtLink to="/dashboard">
          <div>Dashboard</div>
        </NuxtLink>
        <div>User</div>
      </div>
    </div>
  </div>
</template>
