export const useAuth = () => {
  const { $supabase } = useNuxtApp();
  const user = useState("supabase-user");

  const signUp = async (email: string, password: string) => {
    const { data, error } = await $supabase.auth.signUp({
      email,
      password,
    });
    return { data, error };
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await $supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  };

  const signOut = async () => {
    await $supabase.auth.signOut();
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
  };
};
