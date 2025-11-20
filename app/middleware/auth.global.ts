export default defineNuxtRouteMiddleware((to) => {
  const user = useState("supabase-user");

  const protectedRoutes = ["/dashboard"];

  const needsAuth = protectedRoutes.some((route) => to.path.startsWith(route));

  if (needsAuth && !user.value) {
    return navigateTo("/auth?mode=login");
  }
});
