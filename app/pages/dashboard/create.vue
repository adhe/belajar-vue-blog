<script setup>
import NewsForm from "@/components/dashboard/NewsForm.vue";

const { createNews } = useNews();
// const { title, content, status } = useNewsForm();

async function handleSubmit(newsFormData) {
  const { data, error } = await createNews({
    title: newsFormData.title,
    content: newsFormData.content,
  });

  if (!error) {
    navigateTo("/dashboard");
  }
}
</script>

<template>
  <div>Create news</div>
  <NewsForm :on-submit="handleSubmit" />
</template>
