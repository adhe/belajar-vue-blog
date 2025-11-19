<script setup>
import NewsItem from "@/components/NewsItem.vue";

const { $supabase } = useNuxtApp();
const { formatDate } = useDate();

// const newsData = ref([]);
// const isLoading = ref(false);
// async function getAllNews() {
//   const { data, error } = await $supabase.from("news").select("*");
//   newsData.value = data;
//   isLoading.value = false;
// }

// onMounted(() => {
//   isLoading.value = true;
//   getAllNews();
// });

const {
  data: news,
  pending,
  status,
} = await useAsyncData("all-news", async () => {
  const { data, error } = await $supabase.from("news").select("*");
  return data;
});
</script>

<template>
  <div class="text-center">
    <div class="text-bkd-dark text-6xl font-semibold tracking-tight">
      Berita Hari ini
    </div>
    <div class="text-bkd-green font-medium">{{ formatDate(new Date()) }}</div>
  </div>
  <div class="w-full max-w-[700px] mx-auto space-y-2 mt-10">
    <div v-if="pending" class="text-xl bg-amber-600 text-white">
      Sedang loading...
    </div>
    <div v-for="newsItem in news">
      <NewsItem :news="newsItem" :key="newsItem.id" />
      <!-- <NewsItem :news :key="news.id" /> -->
    </div>
    <!-- <div v-for="news in newsData" :key="news.id">{{ news.title }}</div> -->
  </div>
</template>
