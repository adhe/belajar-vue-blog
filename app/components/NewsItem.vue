<script setup>
const props = defineProps(["data"]);

const newsSlug = computed(() => `/news/${props.data.slug}`);
</script>
<template>
  <NuxtLink :to="newsSlug">
    <div class="p-2 flex">
      <div class="w-50 h-32 bg-gray-300 rounded-lg mr-5"></div>
      <div class="flex-1">
        <div class="text-sm font-medium">Selasa, 18 Nov 2025</div>
        <div class="text-lg font-medium">{{ props.data.title }}</div>
        <div class="text-sm">{{ props.data.content }}</div>
      </div>
    </div>
  </NuxtLink>
</template>
