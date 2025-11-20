<script setup>
const { user, signUp, signIn } = useAuth();
const route = useRoute();

if (user.value) {
  navigateTo("/dashboard");
}

const authMode = computed(() =>
  route.query.mode === "signup" ? "signup" : "login",
);
const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref("");

async function handleAuth() {
  loading.value = true;

  const { error: authError } =
    authMode.value === "signup"
      ? await signUp(email.value, password.value)
      : await signIn(email.value, password.value);

  if (authError) {
    error.value = authError;
  } else {
    navigateTo("/dashboard");
  }
}
</script>

<template>
  <div class="w-[400px] space-y-3 mx-auto mt-12">
    <div class="text-3xl font-semibold tracking-tight text-bkd-dark">
      {{ authMode === "signup" ? "Sign up" : "Login" }}
    </div>
    <div class="text-xs text-gray-500">
      Email: {{ email }} <br />
      Password: {{ password }}<br />
      Auth mode: {{ authMode }}
    </div>
    <div class="grid grid-cols-2 w-full bg-gray-200 p-1 rounded-lg gap-1">
      <NuxtLink
        to="/auth?mode=login"
        class="bg-white text-bkd-dark text-center font-medium text-sm px-2 py-1 rounded-md"
        >Login</NuxtLink
      >
      <NuxtLink
        to="/auth?mode=signup"
        class="bg-white text-bkd-dark text-sm text-center font-medium px-2 py-1 rounded-md"
        >Sign up</NuxtLink
      >
    </div>
    <div>
      <label for="email">Email</label>
      <input
        type="text"
        v-model="email"
        placeholder="Email"
        required
        class="p-2 bg-gray-100 w-full rounded-lg"
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
        class="p-2 bg-gray-100 w-full rounded-lg"
      />
    </div>
    <div>
      <button
        type="submit"
        @click="handleAuth"
        class="w-full text-white bg-black p-3 rounded-lg mt-2"
      >
        {{
          loading ? "Loading..." : authMode === "signup" ? "Sign up" : "Login"
        }}
      </button>
    </div>
  </div>
</template>
