<script setup>
import NewsItem from "@/components/NewsItem.vue";

const { $supabase } = useNuxtApp();

const newsData = ref([]);
async function getAllNews() {
  const { data, error } = await $supabase.from("news").select("*");
  newsData.value = data;
}

onMounted(() => {
  getAllNews();
});
</script>
<template>
  <div class="text-center">
    <div class="text-6xl font-semibold tracking-tight">Berita Hari ini</div>
    <div>Selasa, 18 November 2025</div>
  </div>
  <div class="w-full max-w-[700px] mx-auto space-y-2 mt-10">
    <div v-for="news in newsData">
      <NewsItem :news :key="news.id" />
    </div>
    <!-- <div v-for="news in newsData" :key="news.id">{{ news.title }}</div> -->
  </div>
</template>
