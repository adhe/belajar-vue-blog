<script setup>
const { deleteNews } = useNews();
const { createTag, getAllTags } = useTags();

const props = defineProps({
  id: { type: Number, default: null },
  title: { type: String, default: "" },
  content: { type: String, default: "" },
  status: { type: String, default: "draft" },
  slug: { type: String, default: "" },
  submitText: { type: String, default: "Publish" },
  onSubmit: { type: Function, required: true },
});

const localTitle = ref(props.title);
const localContent = ref(props.content);
const localSlug = ref(props.slug);
const localStatus = ref(props.status);
const localTag = ref("");
const localAllTags = ref([]);
const selectedTags = ref([]);

const { data: availableTags, refresh: refreshTags } = await getAllTags();

watch(
  () => props.title,
  (val) => {
    localTitle.value = val;
  },
);

watch(
  () => props.slug,
  (val) => {
    localSlug.value = val;
  },
);

watch(
  () => props.content,
  (val) => {
    localContent.value = val;
  },
);

function handleSubmit() {
  props.onSubmit({
    title: localTitle.value,
    content: localContent.value,
  });
}

async function handleGetAllTags() {
  const { data } = await getAllTags();
  localAllTags.value = data;
}

function addTag() {
  const tag = localTag.value.trim();
  if (tag && !selectedTags.value.includes(tag)) {
    selectedTags.value.push(tag);
    localTag.value = "";

    refreshTags();
  }
}

function removeTag(index) {
  selectedTags.value.splice(index, 1);
}

async function handleKeyDown(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    const tag = localTag.value.trim();
    if (tag) {
      const { error } = await createTag(tag);
      localTag.value = "";
      refreshTags();
    }
    // const tag = localTag.value.trim();
    // const { data, error } = await createTag(tag);
    // if (!error) {
    //   console.log("berhasil membuat tag", data);
    // }
  }
}

async function handleDelete() {
  console.log("delete news");
  const { error } = await deleteNews(props.id);

  if (!error) {
    navigateTo("/dashboard");
  }
}

// defineEmits(["update:title", "update:content", "update:status", "submit"]);
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex space-x-5">
      <div class="flex-1">
        <div>
          <label for="title">Title</label>
          <input
            v-model="localTitle"
            type="text"
            placeholder="Judul artikel"
            class="p-2 bg-gray-100 w-full"
          />
        </div>
        <div>
          <label for="slug">Slug</label>
          <input
            disabled
            type="text"
            v-model="localSlug"
            placeholder="/slug"
            class="p-2 bg-gray-100 w-full text-gray-500"
          />
        </div>
        <div>
          <label class="block" for="content">content</label>
          <textarea
            v-model="localContent"
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
          <div class="text-xs text-gray-600">{{ localTag }}</div>
          <input
            type="text"
            v-model="localTag"
            @keydown="handleKeyDown"
            placeholder="tags"
            class="p-2 bg-gray-100 w-full"
          />
          <div class="flex flex-wrap space-x-1 space-y-1 mt-2">
            <div
              v-for="(tag, index) in availableTags"
              :key="index"
              class="text-xs bg-green-400/40 rounded px-1"
            >
              {{ tag.name }}
              <button
                type="button"
                @click="removeTag(index)"
                class="remove-btn"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        <hr class="my-5" />

        <div>
          <button
            v-if="props.id"
            @click="handleDelete"
            class="w-full text-red-700 bg-white border border-red-500/40 p-3 rounded mt-2"
          >
            Delete
          </button>
          <button class="w-full text-black bg-white border p-3 rounded mt-2">
            Save as draft
          </button>
          <button
            type="submit"
            class="w-full text-white bg-black p-3 rounded mt-2"
          >
            {{ props.submitText }}
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
