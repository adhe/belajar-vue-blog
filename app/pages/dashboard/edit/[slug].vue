<script setup>
import NewsForm from "@/components/dashboard/NewsForm.vue";
const route = useRoute();
const { getNews, updateNews } = useNews();
const { title, content, status, loadNews } = useNewsForm();

const { data } = await getNews(route.params.slug);
if (data.value) {
  loadNews(data.value);
}

async function handleSubmit() {
  const { error } = await updateNews(data.id, {
    title: title.value,
    content: content.value,
    status: status.value,
  });

  if (!error) {
    navigateTo("/dashboard");
  }
}

console.log(data);
</script>

<template>
  <div class="text-3xl font-semibold tracking-tight">Edit</div>
  {{ data }}
  <NewsForm
    v-model:title="title"
    v-model:content="content"
    v-model:status="status"
    @submit="handleSubmit"
  />
</template>
