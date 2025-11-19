<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <NuxtLink :to="`/dashboard/edit/` + props.data.slug">
    <div class="flex hover:bg-gray-50 rounded p-2">
      <div class="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden mr-3">
        <img :src="data.photo" alt="" />
      </div>
      <div class="flex-1">
        <div class="text-bkd-dark font-medium">{{ data.title }}</div>
        <div class="text-sm text-green-900/60">/{{ data.slug }}</div>
      </div>
      <div class="w-56">{{ data.updated_at }}</div>
      <div class="w-32 flex items-start">
        <div
          class="text-sm font-medium px-3 border border-gray-300/60 rounded py-0.5 bg-gray-100 text-gray-700"
        >
          {{ data.status }}
        </div>
      </div>
      <div class="w-32">Action</div>
    </div>
  </NuxtLink>
</template>
