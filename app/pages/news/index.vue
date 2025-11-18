<script setup>
import NewsItem from "@/components/NewsItem.vue";

const NewsLists = [
  {
    id: 1,
    slug: "pelatihan-1",
    title: "Pelatihan 1",
    content: "Ini konten pelatihan 1",
  },
  {
    id: 2,
    slug: "pelatihan-2",
    title: "Pelatihan 2",
    content: "Ini konten pelatihan 2",
  },
  {
    id: 3,
    slug: "pelatihan-3",
    title: "Pelatihan 3",
    content: "Ini konten pelatihan 3",
  },
];
</script>
<template>
  <div class="text-center">
    <div class="text-6xl font-semibold tracking-tight">Berita Hari ini</div>
    <div>Selasa, 18 November 2025</div>
  </div>
  <div class="space-y-2 mt-10">
    <div v-for="data in NewsLists">
      <NewsItem :data />
    </div>
  </div>
</template>
