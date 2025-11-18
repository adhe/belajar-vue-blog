<script setup>
import TodoItem from "@/components/todoItem.vue";
import CustomButton from "@/components/customButton.vue";
import CustomLayout from "@/components/customLayout.vue";

// 6. Event Handling
// 5. List Rendering
const todoLists = ref([
  {
    id: 1,
    todo: "Belajar vue",
    toggle: false,
  },
  {
    id: 2,
    todo: "Hari Senin",
    toggle: false,
  },
  {
    id: 3,
    todo: "Tahun 2025",
    toggle: false,
  },
]);

const resultTodo = ref({});
function getTodo(string) {
  console.log(string);
}
// 4. Conditional Rendering
// 3. Computed()

// 2. STATE: Reactive()
const contact = reactive({
  name: "Radhea",
  email: "adhe@gmail.com",
  phone: "012345",
  isWorking: true,
});

// 1. STATE: Ref()
const valueText = ref("");
const valueArr = ref(["Pisang", "Apel"]);
const valueObject = ref({
  name: "John Doe",
  age: 30,
});

function increaseAge() {
  valueObject.value.age++;
}

function editContact() {
  contact.value.email = "ahsan@gmail.com";
}
const computedContact = computed(() => {
  return valueObject.value.age > 40 ? "Orang tua" : "Dewasa";
});

function fetchData() {
  const dataA = fetch("...");
}
</script>

<template>
  <CustomLayout>
    <div class="container mx-auto">
      <div class="font-semibold text-3xl my-10">Belajar Vue</div>
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-gray-200 p-5 rounded-lg">
          <h2 class="text-xl font-medium mb-5">7. Slots</h2>
          <CustomButton> Text dari Index </CustomButton>
        </div>
        <div class="bg-gray-200 p-5 rounded-lg">
          <h2 class="text-xl font-medium mb-5">6. Components</h2>
          <ul>
            <li v-for="todo in todoLists">
              <TodoItem :todo />
            </li>
          </ul>
        </div>
        <div class="bg-gray-200 p-5 rounded-lg">
          <h2 class="text-xl font-medium mb-5">5. List Rendering</h2>
          <ul>
            <li v-for="(todo, index) in todoLists">
              {{ index }}. {{ todo.todo }} ({{ todo.toggle }})
            </li>
          </ul>

          <button
            v-on:click="getTodo('Hello from button')"
            class="w-full bg-black text-white px-4 py-2 rounded-lg"
          >
            Print hello
          </button>
        </div>
        <div class="bg-gray-200 p-5 rounded-lg">
          <h2 class="text-xl font-medium mb-5">4. Conditional</h2>
          <div v-if="contact.name === 'Radhea'">
            <div v-if="valueObject.age > 40">Orang tua</div>
            <div v-else-if="valueObject.age > 20">Dewasa</div>
          </div>
          <div v-else>Ini Pak Ahsan</div>
        </div>
        <div class="bg-gray-200 p-5 rounded-lg">
          <h2 class="text-xl font-medium mb-5">3. Computed</h2>
          <div>{{ computedContact }}</div>
        </div>
        <div class="bg-gray-200 p-5 rounded-lg">
          <h2 class="text-xl font-medium mb-5">2. State: Reactive()</h2>
          <div>Contact data:</div>
          <div>{{ contact.name }}</div>
          <div>{{ contact.email }}</div>
          <div>{{ contact.phone }}</div>
          <div>{{ contact.isWorking }}</div>

          <div>
            <input
              v-model="contact.name"
              type="text"
              placeholder="Enter text"
              class="border-2 rounded-lg w-full border-black px-3 py-1"
            />
            <input
              v-model="contact.email"
              type="text"
              placeholder="Email"
              class="border-2 rounded-lg w-full border-black px-3 py-1"
            />
            <button
              v-on:click="editContact"
              class="w-full bg-black text-white px-4 py-2 rounded-lg"
            >
              Update
            </button>
          </div>
        </div>
        <div class="bg-gray-200 p-5 rounded-lg">
          <h2 class="text-xl font-medium mb-5">1. State: Ref()</h2>
          <div>Name: {{ valueObject.name }}</div>
          <div>Age: {{ valueObject.age }}</div>
          <div class="space-y-1">
            <input
              v-model="valueObject.name"
              type="text"
              placeholder="Enter text"
              class="border-2 rounded-lg w-full border-black px-3 py-1"
            />
            <input
              v-model.number="valueObject.age"
              type="number"
              placeholder="Enter number"
              class="border-2 rounded-lg w-full border-black px-3 py-1"
            />
            <button
              @click="increaseAge"
              class="w-full bg-black text-white px-4 py-2 rounded-lg"
            >
              Increase age
            </button>
          </div>
        </div>
      </div>
    </div>
  </CustomLayout>
</template>

<style scoped>
button {
  background-color: #000000;
}
</style>
