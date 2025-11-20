<script setup>
import NewsItem from "@/components/dashboard/NewsItem.vue";

// definePageMeta({
//   middleware: "auth",
// });

const { $supabase } = useNuxtApp();

const { data: news } = await useAsyncData("all-news", async () => {
  const { data, error } = await $supabase.from("news").select("*");
  return data;
});
</script>
<template>
  <div class="flex items-center space-x-3">
    <div class="text-3xl font-semibold text-bkd-dark tracking-tight">
      Dashboard
    </div>
    <div>
      <NuxtLink to="/dashboard/create">
        <button
          class="text-bkd-dark border border-green-800/30 font-medium hover:bg-green-800/10 px-3 h-8 flex items-center rounded-lg transition duration-75"
        >
          Create News
        </button>
      </NuxtLink>
    </div>
  </div>
  <div class="mt-5">
    <div v-for="newsItem in news">
      <NewsItem :data="newsItem" />
    </div>
  </div>
</template>
