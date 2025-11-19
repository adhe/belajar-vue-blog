<script setup>
import NewsForm from "@/components/dashboard/NewsForm.vue";

const { createNews } = useNews();
const { title, content, status } = useNewsForm();

async function handleSubmit() {
  const { data, error } = await createNews({
    title: title.value,
    content: content.value,
  });

  if (!error) {
    navigateTo("/dashboard");
  }
}
</script>

<template>
  <div>Create news</div>
  <NewsForm
    v-model:title="title"
    v-model:content="content"
    v-model:status="status"
    @submit="handleSubmit"
  />
</template>
