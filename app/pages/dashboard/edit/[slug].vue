<script setup>
import NewsForm from "@/components/dashboard/NewsForm.vue";
const route = useRoute();
const { getNews, updateNews } = useNews();
// const { title, content, status, loadNews } = useNewsForm();

const { data } = await getNews(route.params.slug);

// if (data.value) {
//   loadNews(data.value);
// }

async function handleSubmit(newsFormData) {
  console.log(data.value.id);
  console.log(newsFormData);

  const { error } = await updateNews(data.value.id, {
    title: newsFormData.title,
    content: newsFormData.content,
  });

  if (!error) {
    navigateTo("/dashboard");
  }
}
</script>

<template>
  <div class="text-3xl font-semibold tracking-tight">Edit</div>
  <NewsForm
    :id="data.id"
    :title="data.title"
    :content="data.content"
    :slug="data.slug"
    submit-text="Update"
    :on-submit="handleSubmit"
  />
</template>
