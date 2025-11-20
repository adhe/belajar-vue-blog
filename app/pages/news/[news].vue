<script setup>
const { $supabase } = useNuxtApp();
const route = useRoute();
const { formatDate, formatDateByDay } = useDate();

// const news = ref({});
// async function getNews() {
//   const { data } = await $supabase
//     .from("news")
//     .select("*")
//     .eq("slug", route.params.news)
//     .single();

//   console.log(data);
//   news.value = data;
// }

// onMounted(() => {
//   getNews();
// });

const { data: news } = await useAsyncData(
  `news-${route.params.news}`,
  async () => {
    const { data } = await $supabase
      .from("news")
      .select("*")
      .eq("slug", route.params.news)
      .single();
    return data;
  },
);
</script>

<template>
  <div class="">
    <div class="text-center">{{ formatDate(news.created_at) }}</div>
    <div
      class="text-bkd-dark w-full max-w-[500px] mx-auto text-4xl text-center font-semibold tracking-tight"
    >
      {{ news.title }}
    </div>
    <div class="text-center leading-none text-sm mt-5">
      <div class="text-sm font-medium text-gray-400">Penulis</div>
      <div class="text-bkd-green font-medium">{{ news.author }}</div>
    </div>
    <div
      class="w-full max-w-[600px] bg-gray-200 h-72 mt-5 mx-auto rounded-lg overflow-hidden"
    >
      <img :src="news.photo" />
    </div>
    <div class="w-full max-w-[520px] text-gray-700 mx-auto mt-6">
      {{ news.content }}
    </div>
  </div>
</template>
