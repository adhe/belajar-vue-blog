<script setup>
const { data } = await useFetch("/api/news");
</script>
<template>
  <pre>{{ data }}</pre>
</template>
