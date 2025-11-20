<script setup>
const { user, signOut } = useAuth();

async function handleSignOut() {
  await signOut();

  navigateTo("/auth?mode=login");
}
</script>

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
        <NuxtLink v-if="user" to="/dashboard">
          <div
            class="text-bkd-dark font-medium hover:bg-green-800/10 px-3 h-8 flex items-center rounded-lg transition duration-75"
          >
            Dashboard
          </div>
        </NuxtLink>
        <NuxtLink
          to="/auth?mode=login"
          class="text-bkd-dark border border-green-800/30 font-medium hover:bg-green-800/10 px-3 h-8 flex items-center rounded-lg transition duration-75"
        >
          {{ user ? user.email : "Login" }}
        </NuxtLink>

        <button
          v-if="user"
          @click="handleSignOut"
          class="text-red-800i ml-2 border border-red-500/30 font-medium hover:bg-green-800/10 px-3 h-8 flex items-center rounded-lg transition duration-75"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
