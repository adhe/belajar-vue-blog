<script setup>
import { Image } from "lucide-vue-next";
const props = defineProps(["news"]);

const newsSlug = computed(() => `/news/${props.news.slug}`);
const date = new Date(props.news.created_at);
</script>
<template>
  <NuxtLink :to="newsSlug">
    <div class="p-2 flex">
      <div
        class="w-50 h-32 bg-gray-300 flex items-center justify-center rounded-lg mr-5 overflow-hidden"
      >
        <img v-if="props.news.photo" :src="props.news.photo" class="w-full" />
        <Image v-else size="32" color="gray" />
      </div>
      <div class="flex-1">
        <div class="text-sm font-medium">{{ date }}</div>
        <div class="text-lg font-medium">{{ props.news.title }}</div>
        <div class="text-sm">{{ props.news.content }}</div>
      </div>
    </div>
  </NuxtLink>
</template>
