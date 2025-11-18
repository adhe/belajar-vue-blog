<script setup>
const p = defineProps(["todo"]);
</script>

<template>
  <div class="flex bg-amber-700 text-white mb-2 p-1">
    {{ p.todo.todo }}
  </div>
</template>
