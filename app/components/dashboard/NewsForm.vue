<script setup>
defineProps({
  title: String,
  content: String,
  status: String,
  submitText: String,
});

// const props = defineProps({
//   title: { type: String, default: "" },
//   content: { type: String, default: "" },
//   status: { type: String, default: "draft" },
//   submitText: String,
// });

defineEmits(["update:title", "update:content", "update:status", "submit"]);
</script>

<template>
  <form @submit.prevent="$emit('submit')">
    <div class="flex space-x-5">
      <div class="flex-1">
        <div>
          <label for="title">Title</label>
          <input
            :value="title"
            @input="$emit('update:title', $event.target.value)"
            type="text"
            placeholder="Judul artikel"
            class="p-2 bg-gray-100 w-full"
          />
        </div>
        <div>
          <label for="slug">Slug</label>
          <input
            type="text"
            placeholder="/slug"
            class="p-2 bg-gray-100 w-full"
          />
        </div>
        <div>
          <label class="block" for="content">content</label>
          <textarea
            :value="content"
            @input="$emit('update:content', $event.target.value)"
            name="content"
            rows="10"
            id=""
            class="p-2 bg-gray-100 w-full"
          ></textarea>
        </div>
      </div>
      <div class="w-[300px]">
        <div>
          <label class="block" for="content">content</label>
          <div class="bg-gray-100 w-full h-48"></div>
          <button class="w-full text-white bg-black p-3 rounded mt-2">
            Upload foto
          </button>
        </div>
        <div class="mt-8">
          <label for="tags">Tags</label>
          <input
            type="text"
            placeholder="tags"
            class="p-2 bg-gray-100 w-full"
          />
        </div>

        <hr class="my-5" />

        <div>
          <button class="w-full text-black bg-white border p-3 rounded mt-2">
            Save as draft
          </button>
          <button
            type="submit"
            class="w-full text-white bg-black p-3 rounded mt-2"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
