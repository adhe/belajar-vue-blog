import { createClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabasePublishableKey,
  );

  const user = useState<any>("supabase-user", () => null);

  if (import.meta.client) {
    supabase.auth.onAuthStateChange((event, session) => {
      user.value = session?.user ?? null;
    });
  }

  return {
    provide: {
      supabase,
      user,
    },
  };
});
